import { Request, Response } from "express";
import { UsersPort } from "../../../domain/ports/users";
import { Controller } from "./types";
import { makeGetAllUsersUseCase } from "../../../use-cases/get-all";

export const makeGetAllUserController = (usersPort: UsersPort): Controller => {
    return (req: Request, res: Response) => {
        (async (): Promise<void> => {
            const getAllUsersUseCase = makeGetAllUsersUseCase({
                usersPort,
            });
            const users = await getAllUsersUseCase();
            res.json({
                users,
            });
        })().catch((error: unknown) => {
            console.log(error);
        });
    };
};