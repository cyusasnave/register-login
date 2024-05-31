import Joi from "joi"

const signInValidation = Joi.object({
  email: Joi.string().required().email().messages({
    "string.required": "Email is required!",
    "string.empty": "Email can't be empty!",
    "string .email": "Invalid email!",
  }),
  password: Joi.string().required().messages({
    "string.required": "Password is required!",
    "string.empty": "Password can't be empty!",
  }),
}).options({ allowUnknown: false })

export default signInValidation
