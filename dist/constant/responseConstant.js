"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseConstants = void 0;
exports.responseConstants = {
    COMMON: {
        BAD_REQUEST: {
            MESSAGE: "The server could not understand the request due to invalid syntax.",
            CODE: 400,
        },
        UNAUTHORIZED_REQUEST: {
            MESSAGE: "This response means unauthenticated",
            CODE: 401,
        },
        FORBIDDEN_REQUEST: {
            MESSAGE: "The client does not have access rights to the content",
            CODE: 403,
        },
        NOTFOUND_REQUEST: {
            MESSAGE: "The server can not find the requested resource",
            CODE: 404,
        },
    },
};
