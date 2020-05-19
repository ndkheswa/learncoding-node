import { Module } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';

@Module({
  controllers: [UsersController]
})
export class UserModule {}
