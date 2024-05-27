import { User } from "../domain/entities/user";
import { UsersPort } from "../domain/ports/users";

export type RegisterUserUseCase = (user: User) => Promise<boolean>;

export const makeRegisterUserUseCase = ({
  usersPort,
}: {
  usersPort: UsersPort
}): RegisterUserUseCase => {

  const useCase = async (user: User): Promise<boolean> => {
    try {
      const result = await usersPort.register(user);
      return result;
    } catch (error) {
      console.log("error");
    }
    return false;
  };

  return useCase;
};