import { User } from "./users.model";


export class Session {
    public accessToken: string;
    public user: User;
}