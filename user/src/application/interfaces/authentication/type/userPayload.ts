import { UUID } from "crypto"

export interface UserPayload {
  userId: UUID
  name: string
  email: string
}
