export class User {
    count: string;
    next: URL;
    previous: URL;
    result: UserResult;
}

export class UserResult {
    id: number;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
}