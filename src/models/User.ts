/* istanbul ignore file */
export class User {
    userId: number;
    username: string;
    userPassword: string;
    userFirstName: string;
    userLastName: string;
    userEmail: string;

    static from(obj: UserRow): User {
        const user = new User(
            obj.id,
            obj.username,
            obj.user_password,
            obj.first_name,
            obj.last_name,
            obj.email
        );
        return user;
    }

    constructor(userId: number,
        username: string,
        userPassword: string,
        userFirstName: string,
        userLastName: string,
        userEmail: string
    ) {
        this.userId = userId;
        this.username = username;
        this.userPassword = userPassword;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userEmail = userEmail;
    }
}

export interface UserRow {
    id: number;
    username: string;
    user_password: string;
    first_name: string;
    last_name: string;
    email: string;
}

