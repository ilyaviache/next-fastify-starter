"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3006;
app_1.default.listen(FASTIFY_PORT);
console.log(`🚀  Fastify server running on port ${FASTIFY_PORT}`);
console.log(`Route index: /`);
console.log(`Route user: /api/v1/user`);
//# sourceMappingURL=index.js.map