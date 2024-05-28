import express, { Request, Response } from "express";
import { CacheId } from "../../domain/value-objects/CacheId";
import { UseCases } from "../assambler";

export type Server = () => void;

const app: express.Application = express();
const port = process.env.PORT ?? 5001;

export const makeServer = (): Server => {

  const server = (): void => {

    app.get("/", (req: Request, res: Response) => {
      UseCases.register("test").then((cacheId: CacheId) => {
        res.json({ cacheId });
      }).catch((error: unknown) => {
        res.send(error);
      });

    });

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${ port.toString() }`);
    });
  };

  return server;
};