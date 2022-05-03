import { Column, Entity } from 'typeorm';
import { IBaseEntity } from '../../common/web/base';

@Entity('SYS_USER')
export class User extends IBaseEntity {

	@Column({ unique: true, name: 'USER_NAME', nullable: false })
	username: string;

	@Column({ unique: true, name: 'EMAIL', nullable: true })
	email: string;

	@Column({ name: 'CELL_PHONE', nullable: true })
	cellPhone: string;

	@Column({ name: 'PASS_WORD', nullable: false })
	password: string;

	@Column({ name: 'IS_VALID_EMAIL', default: '0', nullable: false })
	isValidEmail: string;

	@Column({ name: 'IS_VALID_PHONE', default: '0', nullable: false })
	isValidPhone: string;

	@Column({ name: 'USER_STS_CD', default: '00', nullable: false })
	userStsCd: string; // Enable & Disable
}
