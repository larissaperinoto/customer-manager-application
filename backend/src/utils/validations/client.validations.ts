import Joi from "joi";
import IClient from "../../interfaces/IClient";

const fieldsMissingMessage = "Some required fields are missing";

const clientSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.empty": fieldsMissingMessage,
    "string.min": '"name" length must be at least 3 characters long',
  }),
  email: Joi.string().required().email().messages({
    "string.empty": fieldsMissingMessage,
    "string.email": '"email" must be a valid email',
  }),
  phoneNumber: Joi.number().required().messages({
    "string.empty": fieldsMissingMessage,
  }),
  address: Joi.string().required().messages({
    "string.empty": fieldsMissingMessage,
  }),
  cpf: Joi.number().required().messages({
    "string.empty": fieldsMissingMessage,
  }),
  user: Joi.object({
    username: Joi.string(),
    iat: Joi.number(),
    exp: Joi.number(),
  }),
});

export default function validateClientFields(body: IClient) {
  const { error } = clientSchema.validate(body);
  if (error) return error.details[0].message;
}
