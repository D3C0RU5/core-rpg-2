import { ILoginHandler } from '../../../../application/services/authentication/commands/Login/ILoginHandler'
import { LoginCommand } from '../../../../application/services/authentication/commands/Login/LoginCommand'
import { LoginHandler } from '../../../../application/services/authentication/commands/Login/LoginHandler'
import { Mediator } from '../../../../main/utils/Mediator'
import { handleError, ok } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class LoginController implements Controller {
  constructor(private readonly mediator: Mediator) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      const loginCommand: LoginCommand = new LoginCommand(email, password)
      const loginResult = await this.mediator.send(loginCommand)
      return ok(loginResult)
    } catch (error) {
      return handleError(error)
    }
  }
}
