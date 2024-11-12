import { UserPayload } from "./type/userPayload";

export interface IJwtTokenGenerator {
  generateToken(payload: UserPayload): string
}