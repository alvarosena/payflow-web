import fastify from 'fastify'
import { appRoutes } from './infra/http/routes'

export const app = fastify()
app.register(appRoutes)

app.get('/', (request, reply) => {
  return reply.send({ message: 'hello' })
})
