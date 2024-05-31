import { Request, Response } from "express";
import { UseCases } from "../../assambler";
import { CacheId } from "../../../domain/value-objects/CacheId";

export const registerController = (req: Request, res: Response): void => {
  (async (): Promise<void> => {
    const value: string = req.body.value;
    const cacheId: CacheId = await UseCases.register(value);
    res.json({
      cacheId,
    });

  })().catch((error: unknown) => {
    res.send(error);
  });
};