import { FastifyRequest, FastifyReply } from 'fastify'

export default class UserController {
  // GET /api/v1/user
  static get(_request: FastifyRequest, reply: FastifyReply) {
    reply.send({
      env: process.env.TEST_ENV,
      balance: '$3,277.32',
      picture: 'http://placehold.it/32x32',
      age: 30,
      name: 'Leonor Cross',
      gender: 'female',
      company: 'GRONK',
      email: 'leonorcross@gronk.com',
    })
  }
}