import { Express, Router } from 'express'
import userRoutes from '../routes/userRoutes'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  userRoutes(router)
}
