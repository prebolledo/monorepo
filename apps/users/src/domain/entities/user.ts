import { Email } from "@monorepo/shared-domain";
import { UserId } from "../value-objects/UserId";

export interface User {
  id: UserId;
  name: string;
  email: Email;
}

export const makeUser = (
  { id, name, email }:
  {id?: UserId, name: string, email: Email},
): User => {
  let newId = id;
  if (!newId) {
    newId = new UserId();
  }
  const user: User = {
    id: newId,
    name,
    email: email,
  };

  return user;
};