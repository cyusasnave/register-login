import express from "express"
import userController from "../controllers/userController"
import { validated } from "../middlewares/validations"

const userRouter = express.Router()

userRouter.post("/signup", validated("signUp"), userController.handleSignUp)
userRouter.post("/signin", validated("signIn"), userController.handleSignIn)

export default userRouter
