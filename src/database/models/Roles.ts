import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize"
import { RoleAttributes } from "../../types/modelsTypes"
import db from "../config/db.config"

class Role extends Model<RoleAttributes> {
  declare id: string
  declare name: string
  declare description: string

  declare createdAt: Date
  declare upadtedAt: Date

  public static associate(models: { User: typeof db.models.User }) {
    this.belongsTo(models.User, {
      foreignKey: "roleId",
      as: "users",
    })
  }
}

const RoleModel = (sequelize: Sequelize) => {
  Role.init(
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Roles",
    },
  )
  return Role
}

export default RoleModel
