import Joi from "joi";
import ILogin from "../../interfaces/ILogin";

const fieldsMissingMessage = "Some required fields are missing";

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    "string.empty": fieldsMissingMessage,
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": fieldsMissingMessage,
  }),
});

export default function validateLoginFields(body: ILogin) {
  const { error } = loginSchema.validate(body);
  if (error) return error.details[0].message;
}
