import { FastifyInstance } from 'fastify'

import MainController from './mainController'

export default async function mainRouter(fastify: FastifyInstance) {
  // PREFIX /
  fastify.get('/', MainController.get)
}
