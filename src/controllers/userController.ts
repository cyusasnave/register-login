import { NextFunction, Request, Response } from "express"
import passport from "../middlewares/passport"
import { UserAttributes } from "../types/modelsTypes"
import { sendResponse } from "../utils/response"
import { InfoTypes } from "../types/otherTypes"
import { generateAccessToken } from "../helpers/security.helpers"
import { roleById } from "../services/roleServices"

const handleSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    passport.authenticate(
      "signUp",
      (_error: Error, user: UserAttributes, info: InfoTypes) => {
        if (info) return sendResponse(res, 403, "FORBIDDEN", info.message)
        req.login(user, async () => {
          const role = await roleById(user.roleId)
          const token = generateAccessToken({
            id: user.id as string,
            role: role?.name as string,
          })
          return sendResponse(
            res,
            201,
            "CREATED",
            "Account created successfully!",
            "token",
            token,
          )
        })
      },
    )(req, res, next)
  } catch (error) {
    return sendResponse(res, 500, "SERVER ERROR", (error as Error).message)
  }
}

const handleSignIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    passport.authenticate(
      "signIn",
      (error: Error, user: UserAttributes, info: InfoTypes) => {
        if (info) return sendResponse(res, 401, "UNAUTHORIZED", info.message)
        req.login(user, async () => {
          const role = await roleById(user.roleId)
          const token = generateAccessToken({
            id: user.id as string,
            role: role?.name as string,
          })
          return sendResponse(
            res,
            201,
            "SUCCESS",
            "LoggedIn to your account successfully!",
            "token",
            token,
          )
        })
      },
    )(req, res, next)
  } catch (error) {
    return sendResponse(res, 500, "SERVER ERROR", (error as Error).message)
  }
}

export default {
  handleSignUp,
  handleSignIn,
}
