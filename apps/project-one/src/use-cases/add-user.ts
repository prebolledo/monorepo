import { UsersPort } from "../domain/ports/users";
import { makeUser, User } from "../domain/entities/user";

export type AddUserUseCase = (user: User) => Promise<User>;

export type AddUserUseCaseInput = {
  email: string,
  name: string,
};

export const makeAddUserUseCase = (
  usersPort: UsersPort,
): AddUserUseCase => {
  return async ({email,name}: AddUserUseCaseInput): Promise<User> => {
    const user = makeUser({email, name});
    const id = await usersPort.add(user);
    user.id = id;
    return user;
  }
}