"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = void 0;
const logError = (message, error) => {
    console.error(`[${message}]`, error === null || error === void 0 ? void 0 : error.stack);
};
exports.logError = logError;
//# sourceMappingURL=errors.js.map