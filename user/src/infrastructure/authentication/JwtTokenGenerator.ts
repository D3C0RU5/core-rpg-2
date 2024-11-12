import { User } from "../../@domain/models/user";
import { IJwtTokenGenerator } from "../../application/interfaces/authentication/IJwtTokenGenerator";
import { UserPayload } from "../../application/interfaces/authentication/type/userPayload";
import jwt, { SignOptions } from 'jsonwebtoken'

export class JwtTokenGeneratorAdapter implements IJwtTokenGenerator {
  constructor(
    private readonly secretKey: string = 'insecure-secret',
    private readonly options: SignOptions = { expiresIn: '1h' }) { }

  generateToken(user: User): string {
    const userPayload: UserPayload = {
      userId: user.Id,
      name: user.Name,
      email: user.Email,
    }

    const token = jwt.sign(userPayload, this.secretKey, this.options);
    return token
  }
}