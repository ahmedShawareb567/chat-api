import express, { Request, Response } from "express";
import consola from "consola";
import * as dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import "./core/DB";
import Route from "./router/";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/", express.static(path.join(__dirname, "../uploads")));

app.get("/", (req: Request, res: Response) => {
  res.send("Chat Api Using Socket.io");
});

app.use("/api", Route);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  consola.success(`Server is running on port: ${port}`);
});
