import express from "express";
import {  makeGetAllUserController } from "./controllers/get-all-users";
import { makeFindByIdController } from "./controllers/find-by-id";
import { UsersPort } from "../../domain/ports/users";
import { makeAddUserController } from "./controllers/add-user";

export type Server = () => void;

const app: express.Application = express();
const port = process.env.PORT ?? 5000;

export const makeServer = (usersPort: UsersPort): Server => {

  const server = (): void => {

    app.get("/", makeGetAllUserController(usersPort));
    app.get("/:id", makeFindByIdController(usersPort));
    app.post("/", makeAddUserController(usersPort));

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${ port.toString() }`);
    });
  };

  return server;
};