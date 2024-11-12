import { DomainError } from "../../../../../utils/errors/domain-error"


export const invalidUUIDError = (uuid: string) => {
  return new DomainError(
    'Invalid value for uuid.',
    uuid,
  )
}
