export interface User {
  id?: string,
  email: string,
  name: string,
};

export const makeUser = ({
  name,
  email,
}: {
  name: string,
  email: string
}): User => {
  const user: User = {
    email,
    name,
  };

  return user;
}