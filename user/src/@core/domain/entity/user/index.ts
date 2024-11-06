import { Email } from "../../value-objects/email"
import { UUID } from "../../value-objects/UUID"

export type UserProps = {
  userId: string
  name: string
  email: string
  hashedPassword: string
  token?: string
}

export class User {
  private readonly userId: UUID
  private readonly name: string
  private readonly email: Email
  private readonly hashedPassword: string
  private token?: string

  constructor({ userId, name, email, hashedPassword, token }: UserProps) {
    this.userId = new UUID(userId)
    this.name = name
    this.email = new Email(email)
    this.hashedPassword = hashedPassword
    this.token = token
  }

}