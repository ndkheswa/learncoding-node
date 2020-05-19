import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserRO } from './user.ro';

@Entity({ name: 'users_table'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column({ unique: true})
    username: string;

    @Column()
    password: string;

    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }

    toResponseObject(showToken = true): UserRO {
        const { id, fullname, username } = this;
        const responseObject: UserRO = {
            id,
            fullname,
            username
        };
        return responseObject;
    }
}