import { Sequelize } from "sequelize"
import {
  APP_MODE,
  DB_DEV_URL,
  DB_PROD_URL,
  DB_TEST_URL,
  NODE_DEV,
} from "../../utils/keys"
import Models from "../models"

let db_url: string

switch (NODE_DEV) {
  case "test":
    db_url = DB_TEST_URL
    break
  case "production":
    db_url = DB_PROD_URL
    break
  default:
    db_url = DB_DEV_URL
}

const dialectOptions =
  APP_MODE === "local"
    ? {}
    : {
        ssl: {
          require: true,
          rejectUnauthorized: true,
        },
      }

const sequelize = new Sequelize(db_url, {
  dialect: "postgres",
  dialectOptions,
  logging: false,
})

const connectDatabase = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log("Connected to database successfully!🔥🔥")
  } catch (error) {
    console.log(
      `Error while connecting to database: ${(error as Error).message}`,
    )
  }
}

const models = Models(sequelize)

Object.keys(models).map(key => {
  // @ts-expect-error ignore expected error
  if (models[key].associate) {
    // @ts-expect-error ignore expected error
    models[key].associate(models)
  }
})

const db = { connectDatabase, models }

export default db
