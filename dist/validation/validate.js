"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const responseConstant_1 = require("../constant/responseConstant");
const validate = (req, res, next) => {
    let token = req.headers.authorization;
    console.log(req.headers.authorization);
    if (token.startsWith("Bearer ")) {
        token = token.split(" ");
        if (token[1] === "jibontabedona") {
            next();
        }
        else {
            const errors = {
                msg: responseConstant_1.responseConstants.COMMON.UNAUTHORIZED_REQUEST.MESSAGE,
                code: responseConstant_1.responseConstants.COMMON.UNAUTHORIZED_REQUEST.CODE,
            };
            res.status(401).send({
                success: false,
                message: "Token not valid",
                errors,
            });
        }
    }
};
exports.validate = validate;
