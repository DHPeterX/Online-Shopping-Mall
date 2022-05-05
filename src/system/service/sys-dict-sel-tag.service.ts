import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysDictSelTagRepository } from '../repository';
import { SysDictLangEntity, SysDictSelTagEntity } from '../entity';
import { IBaseService } from '../../common/web/base';

@Injectable()
export class SysDictSelTagService extends IBaseService  {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	constructor(
		@InjectRepository(SysDictSelTagRepository)
		private tgtObjRepo:SysDictSelTagRepository) {
		super();
	}

	async findAll(): Promise<SysDictSelTagEntity[]>{
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<SysDictSelTagEntity>{
		return await this.tgtObjRepo.findOneOrFail(_id);
	}
}
