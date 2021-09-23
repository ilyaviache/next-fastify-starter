"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("./userController"));
async function userController(fastify) {
    fastify.get('/', userController_1.default.get);
}
exports.default = userController;
//# sourceMappingURL=userRouter.js.map