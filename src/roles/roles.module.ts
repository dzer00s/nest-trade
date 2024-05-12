/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';
import { Role } from './roles.model';

@Module({
    controllers: [RolesController],
    providers: [RolesService],
    imports: [SequelizeModule.forFeature([User, Role, UserRoles])],
    exports: [
        RolesService,
    ]
})
export class RolesModule { }
