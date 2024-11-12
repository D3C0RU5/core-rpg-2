import { User } from "../../../../@domain/models/user";
import { BaseError } from "../../../../utils/errors/base-error";
import { IJwtTokenGenerator } from "../../../interfaces/authentication/IJwtTokenGenerator";
import { IUserRepository } from "../../../interfaces/persistence/IUserRepository";
import { RegisterResult } from "./IRegisterService";


export class RegisterService {
  constructor(private readonly jwtTokenGenerator: IJwtTokenGenerator, private readonly userRepository: IUserRepository) { }

  async register(name: string, email: string, password: string): Promise<RegisterResult> {
    if (await this.userRepository.getByEmail(email)) {
      throw new BaseError('User already exists', 'User with given email already exists')
    }

    const user = User.create(name, email, password)
    await this.userRepository.add(user)

    const token = this.jwtTokenGenerator.generateToken(user)

    return Promise.resolve({
      userId: user.Id,
      name: user.Name,
      email,
      token
    })
  }
}