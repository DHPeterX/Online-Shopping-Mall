import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysDictLangRepository } from '../repository';
import { SysDictLangEntity } from '../entity';
import { IBaseService } from '../../common/web/base';

@Injectable()
export class SysDictLangService extends IBaseService  {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	constructor(
		@InjectRepository(SysDictLangRepository)
		private tgtObjRepo:SysDictLangRepository) {
		super();
	}

	async findAll(): Promise<SysDictLangEntity[]>{
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<SysDictLangEntity>{
		return await this.tgtObjRepo.findOneOrFail(_id);
	}
}
