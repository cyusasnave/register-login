/* eslint-disable no-useless-escape */
import { NextFunction, Request, Response } from "express"
import { sendResponse } from "../utils/response"
import signInValidation from "../validations/user/signInValidation"
import signUpvalidation from "../validations/user/signUpValidation"

export const validated = (info: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (info === "signUp") {
      const { error } = signUpvalidation.validate(req.body)
      if (error)
        return sendResponse(
          res,
          400,
          "BAD REQUEST",
          error.details[0].message.replace(/\"/g, ""),
        )
      return next()
    } else if (info === "signIn") {
      const { error } = signInValidation.validate(req.body)
      if (error)
        return sendResponse(
          res,
          400,
          "BAD REQUEST",
          error.details[0].message.replace(/\"/g, ""),
        )
      return next()
    }
  }
}
