import { FastifyInstance } from 'fastify'
import { SignInUserController } from './controllers/sign-in-user-controller'

export async function appRoutes(app: FastifyInstance) {
  const signInUserController = new SignInUserController()

  app.post('/sessions', signInUserController.handle)
}
