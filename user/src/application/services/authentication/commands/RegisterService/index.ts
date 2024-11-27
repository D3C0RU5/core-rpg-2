import { User } from "../../../../../@domain/models/user";
import { IJwtTokenGenerator } from "../../../../interfaces/authentication/IJwtTokenGenerator";
import { IUserRepository } from "../../../../interfaces/persistence/IUserRepository";
import { DuplicatedEmailError } from "./errors/DuplicatedEmailError";
import { RegisterResult } from "./IRegisterService";


export class RegisterService {
  constructor(private readonly jwtTokenGenerator: IJwtTokenGenerator, private readonly userRepository: IUserRepository) { }

  async register(name: string, email: string, password: string): Promise<RegisterResult> {
    if (await this.userRepository.getByEmail(email)) {
      throw new DuplicatedEmailError(email)
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