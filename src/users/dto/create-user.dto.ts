import { ApiProperty } from "@nestjs/swagger";
import { randomInt } from "crypto";

export class CreateUserDto {

    @ApiProperty({example: 'example@gmail.com', description: 'email'})
    readonly email: string;

    @ApiProperty({example: randomInt(100000, 999999), description: 'password'})
    readonly password: string;
}