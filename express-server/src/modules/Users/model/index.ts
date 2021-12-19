import { Schema, model } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: `${process.env.API_BASE}/default.png`,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("user", userSchema);

export default User;
