import { User } from "../domain/entities/user";
import { UsersPort } from "../domain/ports/users";

export type GetAllUsersUseCase = () => Promise<User[]>;

export const makeGetAllUsersUseCase = ({
  usersPort,
}: {
  usersPort: UsersPort
}): GetAllUsersUseCase => {

  const useCase = async (): Promise<User[]> => {
    try {
      const users = await usersPort.getAll();
      return users;
    } catch (error) {
      console.log("error");
    }
    return [];
  };

  return useCase;
};