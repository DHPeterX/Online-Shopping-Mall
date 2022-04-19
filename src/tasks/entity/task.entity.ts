import { Column, Entity, PrimaryColumn } from 'typeorm';
import { TaskStatus } from '../enum/task-status.enum';
import { IBaseEntity } from "../../common/web/base/i-base.entity";
import { v5 as uuidv5 } from 'uuid';

@Entity()
export class Task extends IBaseEntity {

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

}
