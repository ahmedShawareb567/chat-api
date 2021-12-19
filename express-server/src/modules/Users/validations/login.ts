import joi from "joi";

const UserLogin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const UserLoginValidations = (elements: any) => {
  const userCheck = UserLogin.validate(elements);
  if (userCheck.error) {
    return userCheck.error.details[0].message;
  }
};

export default UserLoginValidations;
