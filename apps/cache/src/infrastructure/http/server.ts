import express from "express";
import bodyParser from "body-parser";
import { registerController } from "./controllers/register";
import { getAllController } from "./controllers/get-all";
import { findByIdController } from "./controllers/find-by-id";

export type Server = () => void;

const app: express.Application = express();
const port = process.env.PORT ?? 5001;

app
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }));

export const makeServer = (): Server => {

  const server = (): void => {

    app.get("/", getAllController);
    app.get("/:id", findByIdController);
    app.post("/", registerController);

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${ port.toString() }`);
    });
  };

  return server;
};