import express, { Request, Response } from "express";
import { CacheManagerPort } from "../../domain/ports/cache-manager";
import { makeRegisterUseCase } from "../../use-cases/register";
import { CacheId } from "../../domain/value-objects/CacheId";

export type Server = () => void;

const app: express.Application = express();
const port = process.env.PORT ?? 5001;

export const makeServer = (cacheManagerPort: CacheManagerPort): Server => {

  const server = (): void => {

    app.get("/", (req: Request, res: Response) => {

      const registerUseCase = makeRegisterUseCase({
        cacheManagerPort,
      });
      registerUseCase("test").then((cacheId: CacheId) => {
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