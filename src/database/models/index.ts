import { Sequelize } from "sequelize"
import UserModel from "./User"
import RoleModel from "./Roles"

const Models = (sequelize: Sequelize) => {
  const User = UserModel(sequelize)
  const Role = RoleModel(sequelize)
  return { User, Role }
}

export default Models
