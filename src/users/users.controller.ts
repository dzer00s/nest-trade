/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('users')
@Controller()
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiOperation({ summary: "create user" })
    @ApiResponse({ status: 200, type: User })
    @Post('/user/')
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({ summary: "get users" })
    @ApiResponse({ status: 200, type: [User] })
    @Get('/users/')
    getAll() {
        return this.usersService.getAllUsers();
    }
}
