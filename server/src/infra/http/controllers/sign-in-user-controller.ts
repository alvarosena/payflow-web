import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeSignInUserUseCase } from '../../../core/usecases/factories/make-sign-in-usecase'

export class SignInUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const signInUserBodySchema = z.object({
      pic: z.string().nonempty('Pic is required.'),
      name: z.string().nonempty('Name is required.'),
      email: z.string().nonempty('Email address is required.'),
    })

    const { pic, name, email } = signInUserBodySchema.parse(request.body)

    try {
      const signInUserUsecase = makeSignInUserUseCase()

      const user = await signInUserUsecase.execute({ pic, name, email })
      return reply.status(201).send(user)
    } catch (err) {
      return reply.status(400).send({ message: err })
    }
  }
}
