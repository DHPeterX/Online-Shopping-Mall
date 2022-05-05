import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysDictDataRepository } from '../repository';
import {  SysDictDataEntity } from '../entity';
import { IBaseService } from '../../common/web/base';

@Injectable()
export class SysDictDataService extends IBaseService {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	constructor(
		@InjectRepository(SysDictDataRepository)
		private tgtObjRepo:SysDictDataRepository) {
		super();
	}

	async findAll(): Promise<SysDictDataEntity[]>{
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<SysDictDataEntity>{
		return await this.tgtObjRepo.findOneOrFail(_id);
	}


}
