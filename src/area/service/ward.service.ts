import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ward } from '../entity/ward.entity';

@Injectable()
export class WardService {
	constructor(@InjectRepository(Ward) private repo: Repository<Ward>) {
	}

	create(ward: Partial<Ward>) {

		var ts = Date.now();
		var concattime = new Date(ts);

		ward.createdAt = concattime.toLocaleDateString().toString() + ' ' + concattime.toLocaleTimeString();
		ward.createdBy = 'SYSTEM';
		ward.updatedBy = 'SYSTEM';
		ward.updatedAt = concattime.toLocaleDateString().toString() + ' ' + concattime.toLocaleTimeString();

		const data = this.repo.create(ward);
		return this.repo.save(data);
	}

	findOne(Ward_ID: string) {
		return this.repo.findOne(Ward_ID);
	}

	findAll() {
		return this.repo.find();
	}

	async UdpateOne(Ward_ID: string, attrs: Partial<Ward>) {
		const ward = await this.findOne(Ward_ID);
		if (!ward) {
			throw new Error('Ward not found');
		}

		Object.assign(ward, attrs);
		return this.repo.save(ward);
	}

	async DeleteOne(Ward_ID: string) {
		const ward = await this.findOne(Ward_ID);
		if (!ward) {
			throw new Error('Ward not found');
		}

		return this.repo.delete(ward);
	}


}
