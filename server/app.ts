import fastify from 'fastify'
import Sensible from 'fastify-sensible'

import router from './router'

const server = fastify({
  // Logger only for production
  logger: !!(process.env.NODE_ENV !== 'development'),
})

server.register(Sensible)

// Middleware: Router
server.register(router)

export default server
