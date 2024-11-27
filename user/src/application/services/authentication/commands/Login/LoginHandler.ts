import { ICommandHandler } from '../../../../common/command/ICommandHandler'
import { IJwtTokenGenerator } from '../../../../interfaces/authentication/IJwtTokenGenerator'
import { IUserRepository } from '../../../../interfaces/persistence/IUserRepository'
import { InvalidUserError } from './errors/InvalidUser'
import { LoginCommand, LoginResult } from './LoginCommand'

export class LoginHandler
  implements ICommandHandler<LoginCommand, Promise<LoginResult>>
{
  constructor(
    private readonly jwtTokenGenerator: IJwtTokenGenerator,
    private readonly userRepository: IUserRepository,
  ) {}

  async handle(command: LoginCommand): Promise<LoginResult> {
    const user = await this.userRepository.getByEmail(command.email)
    if (!user) {
      throw new InvalidUserError()
    }

    if (user.HashedPassword !== command.password) {
      throw new InvalidUserError()
    }

    const token = this.jwtTokenGenerator.generateToken(user)

    return {
      userId: user.Id,
      name: user.Name,
      email: user.Email,
      token,
    }
  }
}
