import { FastifyInstance } from 'fastify'

import { userRouter } from './modules/user'
import { mainRouter } from './modules/main'

export default async function router(fastify: FastifyInstance) {
  fastify.register(userRouter, { prefix: '/api/v1/user' })
  fastify.register(mainRouter, { prefix: '/' })
}
