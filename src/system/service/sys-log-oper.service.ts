import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysLogOperRepository } from '../repository';
import { SysLogOperEntity } from '../entity';

@Injectable()
export class SysLogOperService {

	private logger = new Logger('SysLogOperService', { timestamp: true });

	constructor(
		@InjectRepository(SysLogOperRepository)
		private tgtObjRepo: SysLogOperRepository) {
	}

	async findAll(): Promise<SysLogOperEntity[]> {
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<SysLogOperEntity> {
		return await this.tgtObjRepo.findOneOrFail(_id);
	}

}
