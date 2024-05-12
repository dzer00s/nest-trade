import { ApiProperty } from '@nestjs/swagger';
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from 'src/users/users.model';

interface IRoleCreation {
    value: string;
    description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, IRoleCreation> {
    @ApiProperty({example: '1', description: 'uniq id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'role value'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({example: 'Admin', description: 'description role'})
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
