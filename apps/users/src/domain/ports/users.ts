import { User } from "../entities/user";
export interface UsersPort {
  register: (user: User) => Promise<boolean>;
  getAll: () => Promise<User[]>;
  findById: (id: string) => Promise<User | null>;
};