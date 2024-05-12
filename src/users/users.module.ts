import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { User } from './users.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles]),
        RolesModule
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule { }
