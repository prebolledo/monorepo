import { User } from "../../../domain/entities/user";
import { UsersPort } from "../../../domain/ports/users";

const users: User[] = [];

export const makeUsersMemory = (): UsersPort => {
  const register = (user: User): Promise<boolean> => {
    users.push(user);
    return Promise.resolve(true);
  };
  const getAll = async (): Promise<User[]> => {
      return Promise.resolve(users);
      ;
  };
  const findById = async (id: string): Promise<User | null> => {
      return Promise.resolve(users.find((user) => user.id.get() === id) ?? null);
  };
  return {
      register,
      getAll,
      findById,
  };
};