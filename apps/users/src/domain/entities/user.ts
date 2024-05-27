import { UserId } from "../value-objects/UserId";

export interface User {
  id: UserId;
  name: string;
  email: string;
}

export const makeUser = (
  { id, name, email }:
  {id?: UserId, name: string, email: string},
): User => {
  let newId = id;
  if (!newId) {
    newId = new UserId();
  }
  const user: User = {
    id: newId,
    name,
    email,
  };

  return user;
};