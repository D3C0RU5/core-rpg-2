import Observer from "../../../../common/queue/Observer"
import { LoginCommand } from "./LoginCommand"

export type LoginResult = {
  userId: string
  name: string,
  email: string,
  token: string
}

export interface ILoginHandler extends Observer {
  notify(command: LoginCommand): Promise<LoginResult>
}