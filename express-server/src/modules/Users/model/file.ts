import { Schema, model } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const fileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    default: `${process.env.API_BASE}/default.png`,
  },
  mimeType: {
    type: String,
  },
  size: {
    type: String,
  },
});

const File = model("user", fileSchema);

export default File;
