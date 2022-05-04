import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IBaseEntity } from '../../common/web/base/i-entity.base';

@Entity()
export class Ward extends IBaseEntity {
	@PrimaryGeneratedColumn()
	state_ward_cd: string;

	@Column()
	state_city_cd: string;

	@Column()
	state_ward_nm: string;


	constructor(partial: Partial<Ward>) {
		super();
		Object.assign(this, partial);
	}


	@AfterInsert()
	loginsert() {
		console.log('inserted with ID', this.state_ward_cd);
	}


	@AfterUpdate()
	logupdate() {
		console.log('updated with ID', this.state_ward_cd);
	}


	@AfterRemove()
	logremove() {
		console.log('removed with ID', this.state_ward_cd);
	}
}
