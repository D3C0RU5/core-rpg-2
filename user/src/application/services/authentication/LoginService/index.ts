import { ILoginService, LoginResult } from "./ILoginService"

export class LoginService implements ILoginService {
  async login(email: string, password: string): Promise<LoginResult> {
    return Promise.resolve({
      userId: 'fakeId',
      firstName: "firstName",
      lastName: "lastName",
      email,
      token: 'fakeToken'
    })
  }
}