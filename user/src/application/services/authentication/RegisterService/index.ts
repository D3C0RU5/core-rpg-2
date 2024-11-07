import { RegisterResult } from "./IRegisterService";


export class RegisterService {
  async register(firstName: string, lastName: string, email: string, password: string): Promise<RegisterResult> {
    return Promise.resolve({
      userId: 'fakeId',
      firstName,
      lastName,
      email,
    })
  }
}