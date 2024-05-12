import { ApiProperty } from '@nestjs/swagger';
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface IUserCreation {
    email: string;
    password: string;
    nickname: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, IUserCreation> {
    @ApiProperty({example: '1', description: 'uniq id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'example@gmail.com', description: 'email'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: '******', description: 'enter your secure password'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: 'proGamer888', description: 'enter your nickname'})
    @Column({ type: DataType.STRING, unique: true, allowNull: true })
    nickname: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
