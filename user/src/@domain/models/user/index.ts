import { Email } from "./value-objects/email"
import { UUID } from "./value-objects/UUID"

export type UserProps = {
  userId: string
  name: string
  email: string
  hashedPassword: string
  token?: string
}

export class User {
  private readonly _userId: UUID
  private readonly _name: string
  private readonly _email: Email
  private readonly _hashedPassword: string
  private _token?: string

  constructor({ userId, name, email, hashedPassword, token }: UserProps) {
    this._userId = new UUID(userId)
    this._name = name
    this._email = new Email(email)
    this._hashedPassword = hashedPassword
    this._token = token
  }

  static create(name: string, email: string, hashedPassword: string): User {
    const userId = crypto.randomUUID()
    return new User({ userId, name, email, hashedPassword })
  }

  setToken(value: string) {
    this._token = value
  }

  get Id() {
    return this._userId.Value
  }

  get Name() {
    return this._name
  }


  get Email() {
    return this._email.Value
  }

  get HashedPassword() {
    return this._hashedPassword
  }

  get Token() {
    return this._token
  }

}