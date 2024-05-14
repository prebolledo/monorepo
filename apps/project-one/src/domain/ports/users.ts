import { User } from "../entities/user";

export interface UsersPort {
  add: (user: User) => Promise<string>
};