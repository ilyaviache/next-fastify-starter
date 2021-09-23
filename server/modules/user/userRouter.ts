import { FastifyInstance } from 'fastify'

import UserController from './userController'

export default async function userController(fastify: FastifyInstance) {
  // PREFIX /api/v1/user
  fastify.get('/', UserController.get)
}