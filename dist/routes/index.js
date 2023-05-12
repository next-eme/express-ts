"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serial_routes_1 = __importDefault(require("./serial.routes"));
function setupRoutes(app) {
    app.use('/serial', serial_routes_1.default);
}
exports.default = setupRoutes;
