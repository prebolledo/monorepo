export class Email {
  readonly value: string;
  constructor(value: string) {
      this.value = value;
  }
  get(): string {
    return this.value;
  }
  toJSON(): string {
    return this.value;
  }
};