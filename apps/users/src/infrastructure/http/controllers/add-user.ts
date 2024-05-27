import { Request, Response } from "express";
import { UsersPort } from "../../../domain/ports/users";
import { Controller } from "./types";
import { makeUser } from "../../../domain/entities/user";
import { makeRegisterUserUseCase } from "../../../use-cases/register";

export const makeAddUserController = (usersPort: UsersPort): Controller => {
    return (req: Request, res: Response) => {
        (async (): Promise<void> => {
            const user = makeUser({
                name: "Pablo",
                email: "pablo@gmail.com",
            });
            const registerUseCase = makeRegisterUserUseCase({
                usersPort,
            });
            const result = await registerUseCase(user);
            res.json({
                result,
            });
        })().catch((error: unknown) => {
            console.log(error);
        });
    };
};