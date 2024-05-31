export interface UserAttributes {
  id?: string
  name: string
  email: string
  password: string
  confirmPassword: string
  roleId: string
  createdAt?: Date
  upadtedAt?: Date
}

export interface RoleAttributes {
  id?: string
  name: string
  description: string
  createdAt?: Date
  upadtedAt?: Date
}
