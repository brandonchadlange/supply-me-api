export class UserRegisteredEvent {
  constructor(
    public readonly emailAddress: string,
    public readonly guid: string,
    public readonly otp: string,
  ) {}
}
