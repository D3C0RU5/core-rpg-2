export type LoginResult = {
  userId: string
  firstName: string,
  lastName: string,
  email: string,
  token: string
}

export interface ILoginService {
  login(email: string, password: string): Promise<LoginResult>
}