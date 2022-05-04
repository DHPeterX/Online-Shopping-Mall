import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysLogLoginRepository } from '../repository';
import { SysLogLoginEntity } from '../entity';

@Injectable()
export class SysLogLoginService {

	private logger = new Logger('SysLogLoginService', { timestamp: true });

	constructor(
		@InjectRepository(SysLogLoginRepository)
		private tgtObjRepo: SysLogLoginRepository) {
	}

	async findAll(): Promise<SysLogLoginEntity[]> {
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<SysLogLoginEntity> {
		return await this.tgtObjRepo.findOneOrFail(_id);
	}

}
