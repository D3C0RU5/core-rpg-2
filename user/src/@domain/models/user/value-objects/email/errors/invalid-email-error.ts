import { DomainError } from '../../../../../../utils/errors/domain-error'

export const invalidEmailError = (email: string) => {
  return new DomainError(
    'Invalid value for email.',
    email,
  )
}
