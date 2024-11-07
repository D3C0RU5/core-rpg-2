import crypto from 'crypto'
import { invalidUUIDError } from './errors/invalid-uuid-error'

export class UUID {
  private readonly value: string

  constructor(value: string) {
    this.value = value
    if(!UUID.validate(value)) {
      throw invalidUUIDError(value)
    }
  }

  static create() {
    const uuid = crypto.randomUUID()
    return new UUID(uuid)
  }

  private static validate(uuid:string):boolean{
    const regexUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89a-f][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regexUUID.test(uuid);
  }

  get Value() {
    return this.value
  }
}
