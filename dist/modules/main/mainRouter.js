"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mainController_1 = __importDefault(require("./mainController"));
async function mainRouter(fastify) {
    fastify.get('/', mainController_1.default.get);
}
exports.default = mainRouter;
//# sourceMappingURL=mainRouter.js.map