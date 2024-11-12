import { IJwtTokenGenerator } from "../../../interfaces/authentication/IJwtTokenGenerator";
import { RegisterResult } from "./IRegisterService";


export class RegisterService {
  constructor(private readonly jwtTokenGenerator: IJwtTokenGenerator) { }

  async register(firstName: string, lastName: string, email: string, password: string): Promise<RegisterResult> {
    // Check if user already exists

    // create user (generate unique ID)
    const uuid = crypto.randomUUID()

    // Create JWT token
    const token = this.jwtTokenGenerator.generateToken({ userId: uuid, name: firstName, email })

    return Promise.resolve({
      userId: uuid,
      firstName,
      lastName,
      email, token
    })
  }
}