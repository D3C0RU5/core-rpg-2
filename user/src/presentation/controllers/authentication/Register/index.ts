import { IRegisterService } from "../../../../application/services/authentication/RegisterService/IRegisterService";
import { handleError, ok } from "../../../helpers/http/http-helper";
import { Controller } from "../../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../../protocols/http";

export class RegisterController implements Controller {
  constructor(private readonly registerService: IRegisterService) { }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, password } = httpRequest.body
      const loginResult = await this.registerService.register(name, email, password)
      return ok(loginResult)
    } catch (error) {
      return handleError(error)
    }
  }
}