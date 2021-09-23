"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_sensible_1 = __importDefault(require("fastify-sensible"));
const fastify_env_1 = __importDefault(require("fastify-env"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
const fluent_json_schema_1 = __importDefault(require("fluent-json-schema"));
const router_1 = __importDefault(require("./router"));
const server = (0, fastify_1.default)({
    logger: !!(process.env.NODE_ENV !== 'development'),
});
server.register(fastify_sensible_1.default);
server.register(fastify_env_1.default, {
    dotenv: true,
    schema: fluent_json_schema_1.default.object()
        .prop('TEST_ENV', fluent_json_schema_1.default.string().required())
        .prop('DATABASE_URL', fluent_json_schema_1.default.string().required())
        .valueOf()
});
server.register(fastify_cors_1.default, {
    origin: false
});
server.register(router_1.default);
exports.default = server;
//# sourceMappingURL=app.js.map