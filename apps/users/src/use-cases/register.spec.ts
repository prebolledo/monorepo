import { Email } from "@monorepo/shared-domain";
import { makeUser } from "../domain/entities/user";
import { UsersPort } from "../domain/ports/users";
import { makeRegisterUserUseCase } from "./register";

const usersPortMock: UsersPort = {
  register: jest.fn().mockReturnValue(Promise.resolve(true)),
  getAll: jest.fn(),
  findById: jest.fn(),
};

describe("use case: register", () => {

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it("should create a new user", async () => {
    const user = makeUser({
      name: "Pablo",
      email: new Email("email@gmail.com"),
    });
    const registerUserUseCase = makeRegisterUserUseCase({
      usersPort: usersPortMock,
    });
    const result = await registerUserUseCase(user);

    expect(usersPortMock.register).toHaveBeenCalledTimes(1);
    expect(result).toBeTruthy();
  });

  it("should throw an error when creating user", async () => {
    usersPortMock.register = jest.fn().mockImplementation(() => {
      throw new Error("error");
    });
    const user = makeUser({ name: "Pablo", email: new Email("email@gmail.com") });
    const registerUserUseCase = makeRegisterUserUseCase({
      usersPort: usersPortMock,
    });
    const result = await registerUserUseCase(user);

    expect(usersPortMock.register).toHaveBeenCalledTimes(1);
    expect(result).toBeFalsy();
  });
});