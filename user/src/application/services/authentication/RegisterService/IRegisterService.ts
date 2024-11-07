export type RegisterResult = {
  userId: string
  firstName: string,
  lastName: string,
  email: string,
}

export interface IRegisterService {
  register(firstName: string, lastName: string, email: string, password: string): Promise<RegisterResult>
}