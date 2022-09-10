import {v4 as uuidv4} from 'uuid';
import md5 from "md5";

export type TUser = {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    verifyPassword(): boolean;
    comparePassword(password: string): boolean;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;

    constructor(user: TUser) {
        this.id = uuidv4();
        this.name = user.name;
        this.email = user.email;
        this.password = md5(user.password);
    }

    verifyPassword(): boolean {
        return !!this.confirmPassword && this.password.trim() === this.confirmPassword.trim();
    }

    comparePassword(password: string): boolean {
        return this.password === md5(password);
    }
}