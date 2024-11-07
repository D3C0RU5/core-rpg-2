
import { ILoginService } from "../../../../application/services/authentication/LoginService/ILoginService";
import { handleError, ok } from "../../../helpers/http/http-helper";
import { Controller } from "../../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../../protocols/http";

export class LoginController implements Controller {
  constructor(private readonly loginService: ILoginService) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const loginResult = await this.loginService.login(httpRequest.body.email, httpRequest.body.password)
      return ok(loginResult)
    } catch (error) {
      return handleError(error)
    }
  }
}