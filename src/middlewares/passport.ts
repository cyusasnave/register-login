/* eslint-disable @typescript-eslint/no-explicit-any */
import { Strategy as LocalStrategy } from "passport-local"
import passport from "passport"
import { createUser, userExist } from "../services/userServices"
import { roleByName } from "../services/roleServices"
import { comparePassword, hashPassword } from "../helpers/security.helpers"

passport.serializeUser(function (user: any, done) {
  done(null, user)
})

passport.deserializeUser(function (user: any, done) {
  done(null, user)
})

passport.use(
  "signUp",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await userExist(email, null)
        if (user)
          return done(null, false, { message: "User exist in our system! " })

        const role = await roleByName("GUEST")
        if (!role) throw new Error("Sorry something went wrong! { ROLE }")

        const newUser = await createUser({
          ...req.body,
          roleId: role?.id,
          password: hashPassword(password),
          confirmPassword: hashPassword(req.body.confirmPassword),
        })
        return done(null, newUser)
      } catch (error) {
        return done((error as Error).message)
      }
    },
  ),
)

passport.use(
  "signIn",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (_req, email, password, done) => {
      try {
        const user = await userExist(email, null)
        if (!user) return done(null, false, { message: "Wrong credentials!" })
        const isUserPassword = comparePassword(password, user.password)
        if (!isUserPassword)
          return done(null, false, { message: "Wrong credentials!" })
        return done(null, user)
      } catch (error) {
        return done((error as Error).message)
      }
    },
  ),
)

export default passport
