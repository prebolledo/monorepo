import { User } from "../domain/entities/user";
import { UsersPort } from "../domain/ports/users";

export type FindByIdUseCase = (id: string) => Promise<User | null>;

export const makeFindByIdUseCase = ({
  usersPort,
}: {
  usersPort: UsersPort
}): FindByIdUseCase => {

  const useCase = async (id: string): Promise<User | null> => {
    try {
      const users = await usersPort.findById(id);
      return users;
    } catch (error) {
      console.log("error");
    }
    return null;
  };

  return useCase;
};