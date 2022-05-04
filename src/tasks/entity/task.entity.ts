import { Column, Entity } from 'typeorm';
import { TaskStatus } from '../enum/task-status.enum';
import { IBaseEntity } from '../../common/web/base/i-entity.base';

@Entity()
export class Task extends IBaseEntity {

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	status: TaskStatus;

}
