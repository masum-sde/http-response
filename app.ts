import { validate } from "./validation/validate";
import { responseConstants } from "./constant/responseConstant";
import { Errors } from "./error/errorsModel";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/httprequest/:code", validate, (req: any, res: any) => {
  if (req.params.code == 400) {
    const errors: Errors = {
      msg: responseConstants.COMMON.BAD_REQUEST.MESSAGE,
      code: responseConstants.COMMON.BAD_REQUEST.CODE,
    };

    res.status(400).send({
      success: false,
      message: "Bad request",
      errors,
    });
  } else if (req.params.code == 401) {
    const errors: Errors = {
      msg: responseConstants.COMMON.UNAUTHORIZED_REQUEST.MESSAGE,
      code: responseConstants.COMMON.UNAUTHORIZED_REQUEST.CODE,
    };

    res.status(401).send({
      success: false,
      message: "Unauthorized access",
      errors,
    });
  } else if (req.params.code == 403) {
    const errors: Errors = {
      msg: responseConstants.COMMON.FORBIDDEN_REQUEST.MESSAGE,
      code: responseConstants.COMMON.FORBIDDEN_REQUEST.CODE,
    };

    res.status(403).send({
      success: false,
      message: "Forbidden request",
      errors,
    });
  } else {
    const errors: Errors = {
      msg: responseConstants.COMMON.NOTFOUND_REQUEST.MESSAGE,
      code: responseConstants.COMMON.NOTFOUND_REQUEST.CODE,
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
