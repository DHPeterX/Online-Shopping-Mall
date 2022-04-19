import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from '../auth/auth.module';
import {TasksController} from './controller/tasks.controller';
import {TasksRepository} from './repository/tasks.repository';
import {TasksService} from './service/tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository]), AuthModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
