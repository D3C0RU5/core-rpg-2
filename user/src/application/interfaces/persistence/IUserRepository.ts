import { User } from "../../../@domain/models/user";

export interface IUserRepository {
  getByEmail(email: string): Promise<User | null>
  add(user: User): Promise<void>
}