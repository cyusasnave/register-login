import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize"
import { UserAttributes } from "../../types/modelsTypes"
import db from "../config/db.config"

class User extends Model<UserAttributes> {
  declare id: string
  declare name: string
  declare email: string
  declare password: string
  declare confirmPassword: string
  declare roleId: string

  declare createdAt: Date
  declare upadtedAt: Date

  public static associate(models: { Role: typeof db.models.Role }) {
    this.hasOne(models.Role, {
      foreignKey: "roleId",
      as: "role",
    })
  }
}

const UserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      confirmPassword: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.UUID,
        references: {
          model: "Roles",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "Users",
    },
  )

  return User
}

export default UserModel
