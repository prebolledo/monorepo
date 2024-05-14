import { UsersPort } from "../domain/ports/users";
import { makeUser, User } from "../domain/entities/user";

export type AddUserUseCase = (user: User) => Promise<User>;

export const makeAddUserUseCase = (
  usersPort: UsersPort
): AddUserUseCase => {
  return async ({email, name}: User): Promise<User> => {
    const user = makeUser({email, name});
    const id = await usersPort.addUser(user);
    user.id = id;
    return user;
  }
}