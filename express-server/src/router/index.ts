import { Router } from "express";
import UserRoute from "../modules/Users/controller";

const Route = Router();

Route.use("/user", UserRoute);

export default Route;
