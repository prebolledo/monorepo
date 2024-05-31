import { Request, Response } from "express";

export const getAllController = (req: Request, res: Response): void => {
  res.send("cache");
};