export type LoginResult = {
  userId: string
  name: string,
  email: string,
  token: string
}

export interface ILoginService {
  login(email: string, password: string): Promise<LoginResult>
}