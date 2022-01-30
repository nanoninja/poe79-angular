// http://localhost:3000/users

export class UserModel {
    name: string = '';
    email: string = '';
    role: number = 0;
    date_created: Date = new Date();
    date_updated: Date = new Date();
}
