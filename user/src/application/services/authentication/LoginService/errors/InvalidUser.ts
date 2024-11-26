import { StatusCodeEnum } from "../../../../../utils/enum/status-code"
import { ServiceError } from "../../../errors/ServiceError"

export class InvalidUserError extends ServiceError {
  constructor() {
    super('InvalidUserError', "Invalid credentials.", StatusCodeEnum.UNATUTHORIZED, null)
    Object.setPrototypeOf(this, InvalidUserError.prototype)
  }
}