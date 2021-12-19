import joi from "joi";

const userSchema = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
  password: joi.string().required(),
});

const userValidation = (elements: any) => {
  const userCheck = userSchema.validate(elements);
  if (userCheck.error) {
    return userCheck.error.details[0].message;
  }
};

export default userValidation;
