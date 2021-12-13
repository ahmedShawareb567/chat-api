import express, { Request, Response } from "express";
import consola from "consola";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Chat Api Using Socket.io");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  consola.success(`Server is running on port:  ${port}`);
});
