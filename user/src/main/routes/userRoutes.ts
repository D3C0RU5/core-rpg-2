import { Router } from 'express'
import { LoginController } from '../../presentation/controllers/authentication/Login'
import { RegisterController } from '../../presentation/controllers/authentication/Register'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { RegisterService } from '../../application/services/authentication/commands/RegisterService'
import { JwtTokenGeneratorAdapter } from '../../infrastructure/authentication/JwtTokenGenerator'
import { UserRepositoryInMemory } from '../../infrastructure/persistence/memory/UserRepositoryInMemory'
import { LoginHandler } from '../../application/services/authentication/commands/Login/LoginHandler'
import { Mediator } from '../utils/Mediator'
import { LoginCommand } from '../../application/services/authentication/commands/Login/LoginCommand'

const userRepository = UserRepositoryInMemory.getInstance()

export default (router: Router): void => {
  router.post(
    '/login',
    adaptRoute(
      new LoginController(
        new LoginHandler(new JwtTokenGeneratorAdapter(), userRepository),
      ),
    ),
  )
  router.post(
    '/register',
    adaptRoute(
      new RegisterController(
        new RegisterService(new JwtTokenGeneratorAdapter(), userRepository),
      ),
    ),
  )
}
