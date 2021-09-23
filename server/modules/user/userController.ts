import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../../helpers/utils'

export default class UserController {
  // GET /api/v1/user
  static async get(_request: FastifyRequest, reply: FastifyReply) {
    try {
      let users = await prisma.user.findMany()
      return reply.send({ data: { users } })
    } catch (error) {
      console.error('users', error)
      return reply.status(500).send({ error: `Cannot fetch users` })
    }
  }
}