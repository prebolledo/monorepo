import { Request, Response } from "express";
import { UseCases } from "../../assambler";

export const findByIdController = (req: Request, res: Response): void => {
  (async (): Promise<void> => {
    const id = req.params.id;
    const cache = await UseCases.findById(id);
    res.json({
      cache,
    });
    return Promise.resolve();
  })().catch((error: unknown) => {
    res.send(error);
  });
};