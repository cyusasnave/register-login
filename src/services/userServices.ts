import db from "../database/config/db.config"
import { UserAttributes } from "../types/modelsTypes"

// find a user by id or email
export const userExist = async (email: string | null, id: string | null) => {
  if (email) {
    return await db.models.User.findOne({ where: { email } })
  } else if (id) {
    return await db.models.User.findByPk(id)
  } else {
    throw new Error("Error while finding if user exist!")
  }
}

// create the user
export const createUser = async (data: UserAttributes) => {
  return await db.models.User.create(data)
}
