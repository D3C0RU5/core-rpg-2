import { StatusCodeEnum } from "../../../../../utils/enum/status-code";
import { ServiceError } from "../../../errors/ServiceError";

export class DuplicatedEmailError extends ServiceError {
  constructor(email: string) {
    super('DuplicatedError', "Email already exists.", StatusCodeEnum.CONFLICT, { email })
    Object.setPrototypeOf(this, DuplicatedEmailError.prototype)
  }
}