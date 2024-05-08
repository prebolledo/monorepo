import { User } from "../user";

export interface UsersPort {
  addUser: (user: User) => Promise<string>
};