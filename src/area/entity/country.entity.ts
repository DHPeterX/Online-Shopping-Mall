import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IBaseEntity } from '../../common/web/base/i-entity.base';

@Entity()
export class Country extends IBaseEntity {
	@PrimaryGeneratedColumn()
	state_cntry_cd: string;

	@Column()
	state_cntry_nm: string;


	constructor(partial: Partial<Country>) {
		super();
		Object.assign(this, partial);
	}


	@AfterInsert()
	loginsert() {
		console.log('inserted with ID', this.state_cntry_cd);
	}


	@AfterUpdate()
	logupdate() {
		console.log('updated with ID', this.state_cntry_cd);
	}


	@AfterRemove()
	logremove() {
		console.log('removed with ID', this.state_cntry_cd);
	}
}
