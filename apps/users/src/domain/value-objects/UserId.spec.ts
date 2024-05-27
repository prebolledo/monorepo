import { UserId } from "./UserId";

describe("value obejct: UserId", () => {
  it("should return valid obect", () => {
    const value = "xyz";
    const userId = new UserId(value);
    expect(userId.get()).toEqual(value);
    expect(userId.toJSON()).toEqual(value);
  });
});