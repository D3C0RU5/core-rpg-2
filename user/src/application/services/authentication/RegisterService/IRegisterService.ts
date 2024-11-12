export type RegisterResult = {
  userId: string
  name: string,
  email: string,
}

export interface IRegisterService {
  register(name: string, email: string, password: string): Promise<RegisterResult>
}