import { ApiProperty } from '@nestjs/swagger';

export  class CreateUserDto {

   @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly fullname: string;

    @ApiProperty()
    readonly username: string;

    @ApiProperty()
    readonly password: string;
}