"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./modules/user");
const main_1 = require("./modules/main");
async function router(fastify) {
    fastify.register(user_1.userRouter, { prefix: '/api/v1/user' });
    fastify.register(main_1.mainRouter, { prefix: '/' });
}
exports.default = router;
//# sourceMappingURL=router.js.map