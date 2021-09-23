"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../helpers/utils");
class UserController {
    static async get(_request, reply) {
        try {
            let users = await utils_1.prisma.user.findMany();
            return reply.send({ data: { users } });
        }
        catch (error) {
            console.error('users', error);
            return reply.status(500).send({ error: `Cannot fetch users` });
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map