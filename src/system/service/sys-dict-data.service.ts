import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysDictDataRepository } from '../repository';
import {  SysDictDataEntity } from '../entity';

@Injectable()
export class SysDictDataService {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	constructor(
		@InjectRepository(SysDictDataRepository)
		private tgtObjRepo:SysDictDataRepository) {
	}

	async findAll(): Promise<SysDictDataEntity[]>{
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<SysDictDataEntity>{
		return await this.tgtObjRepo.findOneOrFail(_id);
	}


}
