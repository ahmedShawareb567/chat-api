import { Router } from "express";
import User from "../model";
import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userValidation from "../validations/register";
import UserLoginValidations from "../validations/login";
import upload from "../../../middlewares/upload";
import isAuth from "../../../middlewares/isAuth";

import * as dotenv from "dotenv";

dotenv.config();

const UserRoute: any = Router();
const privateKey = `${process.env.JWT_TOKEN}`;

UserRoute.post("/register", async (req: any, res: any) => {
  try {
    const bodyData = req.body;

    const userCheck = userValidation(req.body);

    if (userCheck) {
      return res.status(400).json({
        message: userCheck,
        status: 400,
      });
    }

    const user_content: any = {
      username: bodyData.username,
      email: bodyData.email,
      phone: bodyData.phone,
      password: bodyData.password,
    };

    user_content.password = await bcrypt.hash(bodyData.password, 15);

    const user = new User(user_content);
    await user.save();

    let token = jwt.sign({ token: user._id }, privateKey);

    if (user) {
      return res.status(200).send({
        message: "User is registered",
        success: true,
        token,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

UserRoute.post("/login", async (req: any, res: any) => {
  try {
    const bodyData = req.body;

    const userCheck = UserLoginValidations(bodyData);

    if (userCheck) {
      return res.status(400).json({
        message: userCheck,
        status: 400,
      });
    }

    const user = await User.findOne({ email: bodyData.email });

    if (user) {
      const checkPassword = await bcrypt.compare(
        bodyData.password,
        user.password
      );

      if (checkPassword) {
        let token = jwt.sign({ token: user._id }, privateKey);

        res.json({
          message: "Login is successfully",
          success: true,
          data: {
            token,
            user: user,
          },
        });
      } else {
        res.send({
          message: "Invalid Email or Password",
          data: null,
          success: false,
        });
      }
    } else {
      res.send({
        message: "Invalid Email or Password",
        data: null,
        success: false,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

UserRoute.post("/me", async (req: any, res: any) => {
  try {
    let { token }: any = jwt.verify(req.body.token, privateKey);

    const user = await User.findOne({ _id: token }).exec();
    res.json({
      user,
      token: req.body.token,
    });
  } catch (e) {
    console.log(e);
  }
});

UserRoute.post(
  "/upload",
  isAuth,
  upload.single("file"),
  (req: any, res: any) => {
    res.send(req.file);
  }
);

export default UserRoute;
