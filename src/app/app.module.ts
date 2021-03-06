import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/model/user.model';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true }),
    User
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}