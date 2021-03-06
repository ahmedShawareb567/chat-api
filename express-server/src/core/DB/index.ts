import mongoose from "mongoose";
import consola from "consola";
import * as dotenv from "dotenv";

dotenv.config();

mongoose.connect(`${process.env.DB_NAME}`).then(() => {
  consola.success(`DB is connecting`);
});
