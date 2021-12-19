import jwt from "jsonwebtoken";
import User from "../modules/Users/model/index";
import * as dotenv from "dotenv";

dotenv.config();

const privateKey = `${process.env.JWT_TOKEN}`;

const isAuth = async (req: any, res: any, next: any) => {
  try {
    if (req.headers.authorization) {
      const bearerToken = req.headers.authorization.split(" ")[1];
      let { token }: any = jwt.verify(bearerToken, privateKey);
      const user = await User.findOne({ _id: token }).exec();

      if (user) {
        return next();
      }

      return res.json({
        success: false,
        message: "UnAuthorized User !",
      });
    }

    return res.json({
      success: false,
      message: "Missing authorization header ...",
    });
  } catch (e) {
    console.log(e);
  }
};

export default isAuth;
