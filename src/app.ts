import express, { Application } from "express"
import session from "express-session"
import passport from "./middlewares/passport"
import router from "./routes"
import { SESSION_SECRET } from "./utils/keys"

const app: Application = express()

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use("/api", router)

export default app
