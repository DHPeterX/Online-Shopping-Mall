import {Injectable, NotFoundException} from '@nestjs/common';
import {TaskStatus} from '../enum/task-status.enum';
import {CreateTaskDto} from '../dto/create-task.dto';
import {GetTasksFilterDto} from '../dto/get-tasks-filter.dto';
import {TasksRepository} from '../repository/tasks.repository';
import {InjectRepository} from '@nestjs/typeorm';
import {Task} from '../entity/task.entity';
import {User} from '../../auth/entity/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private repo: TasksRepository,
  ) {}

  getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    //return this.tasksRepository.getTasks(filterDto, user);
    return ;
  }

  async getTaskById(id: string, user: User): Promise<Task> {
    const found = null ;//await this.repo.findOneByOrFail()

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    //return found;
    return ;
  }

  createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    //return this.tasksRepository.createTask(createTaskDto, user);
    return ;
  }

  async deleteTask(id: string, user: User): Promise<void> {
    const result = null;//await this.repo.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateTaskStatus(
    id: string,
    status: TaskStatus,
    user: User,
  ): Promise<Task> {
    const tgtObj = await this.getTaskById(id, user);

    tgtObj.status = status;
    //await this.tasksRepository.save(task);

    return tgtObj;
  }
}
