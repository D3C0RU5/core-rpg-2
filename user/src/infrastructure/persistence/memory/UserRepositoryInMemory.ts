import { User } from "../../../@domain/models/user";
import { IUserRepository } from "../../../application/interfaces/persistence/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
  private static _instance?: UserRepositoryInMemory
  private constructor(private users: User[] = []) { }

  static getInstance(): UserRepositoryInMemory {
    if (this._instance) {
      return this._instance
    }
    return new UserRepositoryInMemory()

  }

  async add(user: User): Promise<void> {
    this.users.push(user)
  }

  async getByEmail(email: string): Promise<User | null> {
    for (const user of this.users) {
      if (user.Email === email) return Promise.resolve(user)
    }

    return Promise.resolve(null)
  }
}