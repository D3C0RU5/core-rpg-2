/* eslint-disable @typescript-eslint/no-explicit-any */
export class BaseError extends Error {
  public readonly name: string
  public readonly message: string
  public readonly details: any
  public readonly stack?: string

  constructor(name: string, message: string, details: any) {
    super(message)
    this.name = name
    this.message = message
    this.details = details
    this.stack = new Error()?.stack

    Object.setPrototypeOf(this, BaseError.prototype)
  }

  toJson() {
    const { name, message, details } = this
    return {
      name,
      message,
      details,
    }
  }
}
