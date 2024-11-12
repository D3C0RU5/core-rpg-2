import { Router } from 'express'
import { LoginController } from '../../presentation/controllers/authentication/Login'
import { RegisterController } from '../../presentation/controllers/authentication/Register'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { LoginService } from '../../application/services/authentication/LoginService'
import { RegisterService } from '../../application/services/authentication/RegisterService'
import { JwtTokenGeneratorAdapter } from '../../infrastructure/authentication/JwtTokenGenerator'

export default (router: Router): void => {
  router.post('/login', adaptRoute(new LoginController(new LoginService(new JwtTokenGeneratorAdapter()))))
  router.post('/register', adaptRoute(new RegisterController(new RegisterService(new JwtTokenGeneratorAdapter()))))
}
