import { IJwtTokenGenerator } from "../../../interfaces/authentication/IJwtTokenGenerator"
import { ILoginService, LoginResult } from "./ILoginService"

export class LoginService implements ILoginService {
  constructor(private readonly jwtTokenGenerator: IJwtTokenGenerator) { }

  async login(email: string, password: string): Promise<LoginResult> {


    const uuid = crypto.randomUUID()

    // Create JWT token
    const token = this.jwtTokenGenerator.generateToken({ userId: uuid, name: 'founded_first_name', email })

    return Promise.resolve({
      userId: uuid,
      firstName: "founded_first_name",
      lastName: "founded_last_name",
      email,
      token
    })
  }
}