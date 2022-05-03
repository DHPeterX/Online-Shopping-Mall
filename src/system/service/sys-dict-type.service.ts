import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysDictTypeRepository } from '../repository';
import { SysDictTypeEntity } from '../entity';

@Injectable()
export class SysDictTypeService {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	constructor(
		@InjectRepository(SysDictTypeRepository)
		private tgtObjRepo:SysDictTypeRepository) {
	}

	async findAll(): Promise<SysDictTypeEntity[]>{
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<SysDictTypeEntity>{
		return await this.tgtObjRepo.findOneOrFail(_id);
	}

}
