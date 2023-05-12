"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logs {
    constructor(namespace) {
        this.namespace = namespace;
        this.namespace = this.namespace.toUpperCase();
    }
    print(message) {
        console.log(`⚡️[${this.namespace}]: ${message}`);
    }
}
exports.default = Logs;
