export class CreateRequest {
  constructor(
    public readonly username: string,
    public readonly password: string,
  ) {}
}
