import { StatusCodeEnum } from "../../../utils/enum/status-code"
import { BaseError } from "../../../utils/errors/base-error"

export class ServiceError extends BaseError {
  public readonly code: StatusCodeEnum
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(name: string, message: string, code: number, details: any = null) {
    super(name, message, details)
    this.code = code
    Object.setPrototypeOf(this, ServiceError.prototype)
  }

  toJson() {
    const { name, message, details, code } = this
    return {
      name,
      message,
      details,
      code
    }
  }
}