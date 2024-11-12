import { User } from "../../../@domain/models/user";

export interface IJwtTokenGenerator {
  generateToken(user: User): string
}