import { BaseError } from "../../../utils/errors/base-error"

export class DomainError extends BaseError {
  constructor(message: string, value: unknown) {
    super('DomainError', message, value)
    Object.setPrototypeOf(this, DomainError.prototype)
  }
}
