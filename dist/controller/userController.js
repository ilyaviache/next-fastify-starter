"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function userController(fastify) {
    fastify.get("/", async function (_request, reply) {
        reply.send({
            balance: "$3,277.32",
            picture: "http://placehold.it/32x32",
            age: 30,
            name: "Leonor Cross",
            gender: "female",
            company: "GRONK",
            email: "leonorcross@gronk.com",
        });
    });
}
exports.default = userController;
//# sourceMappingURL=userController.js.map