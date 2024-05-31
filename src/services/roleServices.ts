import db from "../database/config/db.config"

export const roleByName = async (name: string) => {
  return await db.models.Role.findOne({ where: { name } })
}

export const roleById = async (id: string) => {
  return await db.models.Role.findOne({ where: { id } })
}
