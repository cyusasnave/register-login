import Joi from "joi"

const signUpvalidation = Joi.object({
  name: Joi.string()
    .required()
    .regex(/^[A-Za-z\s]+$/)
    .messages({
      "string.required": "Name is required!",
      "string.empty": "Name field can't be empty!",
      "string.pattern.base":
        "Name can't include numbers and special characters!",
    }),
  email: Joi.string().required().email().messages({
    "string.required": "Email is required!",
    "string.empty": "Email field can't be empty!",
    "string.email": "Invalid email!",
  }),
  password: Joi.string()
    .required()
    .regex(/^(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})(?=(.*[0-9]){1,}).{5,}$/)
    .messages({
      "string.required": "Password is required!",
      "string.empty": "Password field can't be empty!",
      "string.pattern.base":
        "Password must at least have one capital letter, a special character and a number!",
    }),
  confirmPassword: Joi.string().required().equal(Joi.ref("password")).messages({
    "string.required": "Confirm Password is required!",
    "any.only": "Password don't match!",
  }),
}).options({ allowUnknown: false })

export default signUpvalidation
