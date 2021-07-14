import { NextFunction, Request, Response } from "express";
import { responseConstants } from "../constant/responseConstant";
import { Errors } from "../error/errorsModel";

export const validate: any = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: any = req.headers.authorization;
  console.log(req.headers.authorization);

  if (token.startsWith("Bearer ")) {
    token = token.split(" ");
    if (token[1] === "jibontabedona") {
      next();
    } else {
      const errors: Errors = {
        msg: responseConstants.COMMON.UNAUTHORIZED_REQUEST.MESSAGE,
        code: responseConstants.COMMON.UNAUTHORIZED_REQUEST.CODE,
      };

      res.status(401).send({
        success: false,
        message: "Token not valid",
        errors,
      });
    }
  }
};
