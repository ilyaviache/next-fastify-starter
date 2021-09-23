"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const { readFile } = fs_1.promises;
class MainController {
    static async get(_request, reply) {
        const indexHtmlPath = (0, path_1.resolve)(__dirname, '../../../static/index.html');
        const indexHtmlContent = await readFile(indexHtmlPath);
        reply
            .header('Content-Type', 'text/html charset=utf-8')
            .send(indexHtmlContent);
    }
}
exports.default = MainController;
//# sourceMappingURL=mainController.js.map