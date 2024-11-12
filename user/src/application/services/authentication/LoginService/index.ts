import { BaseError } from "../../../../utils/errors/base-error"
import { IJwtTokenGenerator } from "../../../interfaces/authentication/IJwtTokenGenerator"
import { IUserRepository } from "../../../interfaces/persistence/IUserRepository"
import { ILoginService, LoginResult } from "./ILoginService"

export class LoginService implements ILoginService {
  constructor(private readonly jwtTokenGenerator: IJwtTokenGenerator, private readonly userRepository: IUserRepository) { }

  async login(email: string, password: string): Promise<LoginResult> {

    const user = await this.userRepository.getByEmail(email)
    if (!user) {
      throw new BaseError('InvalidUser', 'User with given email not exists')
    }

    if (user.HashedPassword !== password) {
      throw new BaseError('InvalidUser', 'Invalid password.')
    }

    const token = this.jwtTokenGenerator.generateToken(user)

    return Promise.resolve({
      userId: user.Id,
      name: user.Name,
      email,
      token
    })
  }
}