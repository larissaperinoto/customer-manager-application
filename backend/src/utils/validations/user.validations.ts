import Joi from "joi";
import IUser from "../../interfaces/IUser";

const fieldsMissingMessage = "Some required fields are missing";

const userSchema = Joi.object({
  email: Joi.string().required().email().messages({
    "string.empty": fieldsMissingMessage,
    "string.email": '"email" must be a valid email',
  }),
  username: Joi.string().required().messages({
    "string.empty": fieldsMissingMessage,
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": fieldsMissingMessage,
  }),
});

export default function validateUserFields(body: IUser) {
  const { error } = userSchema.validate(body);
  if (error) return error.details[0].message;
}
