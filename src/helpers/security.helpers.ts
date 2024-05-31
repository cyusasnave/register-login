import bcrypt, { genSaltSync } from "bcrypt"
import { TokenData } from "../types/otherTypes"
import jwt from "jsonwebtoken"
import { ACCESS_TOKEN_SECRET } from "../utils/keys"

export const hashPassword = (password: string) => {
  const salt = genSaltSync()
  return bcrypt.hashSync(password, salt)
}

export const comparePassword = (existingPass: string, bodyPass: string) => {
  return bcrypt.compareSync(existingPass, bodyPass)
}

export const generateAccessToken = (data: TokenData) => {
  return jwt.sign(data, ACCESS_TOKEN_SECRET, { expiresIn: "1d" })
}
