import { Request, Response } from "express";
import { UsersPort } from "../../../domain/ports/users";
import { Controller } from "./types";
import { makeFindByIdUseCase } from "../../../use-cases/find-by-id";

export const makeFindByIdController = (usersPort: UsersPort): Controller => {
    return (req: Request, res: Response) => {
        (async (): Promise<void> => {
            const id: string = req.params.id;
            const findByIdUseCase = makeFindByIdUseCase({
                usersPort,
            });
            const user = await findByIdUseCase(id);
            res.json({
                user,
            });
        })().catch((error: unknown) => {
            console.log(error);
        });
    };
};