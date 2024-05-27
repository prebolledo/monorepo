import { v4 as uuidv4 } from "uuid";

export class UserId {
  readonly value: string;
  constructor(value?: string) {
      this.value = value ?? uuidv4();
  }
  get(): string {
    return this.value;
  }
  toJSON(): string {
    return this.value;
  }
};