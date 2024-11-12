import { IJwtTokenGenerator } from "../../application/interfaces/authentication/IJwtTokenGenerator";
import { UserPayload } from "../../application/interfaces/authentication/type/userPayload";
import jwt, { SignOptions } from 'jsonwebtoken'

export class JwtTokenGeneratorAdapter implements IJwtTokenGenerator {
  constructor(
    private readonly secretKey: string = 'insecure-secret',
    private readonly options: SignOptions = { expiresIn: '1h' }) { }

  generateToken(payload: UserPayload): string {
    const token = jwt.sign(payload, this.secretKey, this.options);
    return token
  }
}