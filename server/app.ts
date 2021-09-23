import fastify from 'fastify'
import Sensible from 'fastify-sensible'
import Env from 'fastify-env'
import Cors from 'fastify-cors'

import S from 'fluent-json-schema'

import router from './router'

const server = fastify({
  // Logger only for production
  logger: !!(process.env.NODE_ENV !== 'development'),
})

server.register(Sensible)

server.register(Env, {
  dotenv: true,
  schema: S.object()
    .prop('TEST_ENV', S.string().required())
    .prop('DATABASE_URL', S.string().required())
    .valueOf()
})

server.register(Cors, {
  origin: false
})

// Middleware: Router
server.register(router)

export default server
