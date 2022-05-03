import { Column, Entity } from 'typeorm';
import { TaskStatus } from '../enum/task-status.enum';
import { IBaseEntity } from '../../common/web/base/i-base.entity';

@Entity()
export class Task extends IBaseEntity {

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	status: TaskStatus;

}
