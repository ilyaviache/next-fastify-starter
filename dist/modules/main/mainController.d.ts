import { FastifyRequest, FastifyReply } from 'fastify';
export default class MainController {
    static get(_request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
