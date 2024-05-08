export interface User {
  id?: string,
  email: string,
  name: string,
};

export const makeUser = ({id, name, email}: User): User => {
  const user: User = {
    id,
    email,
    name,
  };

  return user;
}