"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
async function prisma(fastify) {
    const prisma = new client_1.PrismaClient();
    fastify.decorate('elastic', prisma);
}
exports.default = (0, fastify_plugin_1.default)(prisma, {
    name: 'prisma'
});
//# sourceMappingURL=prisma.js.map