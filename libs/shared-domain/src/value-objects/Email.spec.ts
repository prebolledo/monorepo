import { Email } from "./Email";

describe("value obejct: Email", () => {
  it("should return valid obect", () => {
    const value = "email@domain.com";
    const userId = new Email(value);
    expect(userId.get()).toEqual(value);
    expect(userId.toJSON()).toEqual(value);
  });
});