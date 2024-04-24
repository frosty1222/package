"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnDesireType = void 0;
const ReturnDesireType = (options, type) => {
    if (options.length === 0)
        return undefined;
    if (type === "")
        return undefined;
    for (const o of options) {
        if (o.value === type) {
            return o;
        }
    }
    return undefined;
};
exports.ReturnDesireType = ReturnDesireType;
