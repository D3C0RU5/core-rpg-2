import { ICommand } from '../../../../common/command/ICommand'

export type LoginResult = {
  userId: string
  name: string
  email: string
  token: string
}

export class LoginCommand implements ICommand {
  type = 'LoginCommand'
  constructor(
    readonly email: string,
    readonly password: string,
  ) {}
  __resultType!: Promise<LoginResult>
}
