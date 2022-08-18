export class UserRegisteredEvent {
    constructor(
        public readonly emailAddress: string,
        public readonly otp: string,
    ) {}
}