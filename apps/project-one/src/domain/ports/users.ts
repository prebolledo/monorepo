import { User } from "../entities/user";

export interface UsersPort {
  addUser: (user: User) => Promise<string>
};