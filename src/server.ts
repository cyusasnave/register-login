import app from "./app"
import db from "./database/config/db.config"
import { PORT } from "./utils/keys"

const startServer = async () => {
  await db.connectDatabase()
  app.listen(PORT, () =>
    console.log(
      `Server running on port ${PORT}: http://localhost:${PORT} 😍😍`,
    ),
  )
}

startServer()
