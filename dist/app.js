"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("./validation/validate");
const responseConstant_1 = require("./constant/responseConstant");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/httprequest/:code", validate_1.validate, (req, res) => {
    if (req.params.code == 400) {
        const errors = {
            msg: responseConstant_1.responseConstants.COMMON.BAD_REQUEST.MESSAGE,
            code: responseConstant_1.responseConstants.COMMON.BAD_REQUEST.CODE,
        };
        res.status(400).send({
            success: false,
            message: "Bad request",
            errors,
        });
    }
    else if (req.params.code == 401) {
        const errors = {
            msg: responseConstant_1.responseConstants.COMMON.UNAUTHORIZED_REQUEST.MESSAGE,
            code: responseConstant_1.responseConstants.COMMON.UNAUTHORIZED_REQUEST.CODE,
        };
        res.status(401).send({
            success: false,
            message: "Unauthorized access",
            errors,
        });
    }
    else if (req.params.code == 403) {
        const errors = {
            msg: responseConstant_1.responseConstants.COMMON.FORBIDDEN_REQUEST.MESSAGE,
            code: responseConstant_1.responseConstants.COMMON.FORBIDDEN_REQUEST.CODE,
        };
        res.status(403).send({
            success: false,
            message: "Forbidden request",
            errors,
        });
    }
    else {
        const errors = {
            msg: responseConstant_1.responseConstants.COMMON.NOTFOUND_REQUEST.MESSAGE,
            code: responseConstant_1.responseConstants.COMMON.NOTFOUND_REQUEST.CODE,
        };
        res.status(404).send({
            success: false,
            message: "Notfound request",
            errors,
        });
    }
});
app.listen(5000, () => {
    console.log("Listening From Server.");
});
