import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SysDictTypeRepository } from '../repository';
import { SysDictTypeEntity } from '../entity';
import { IBaseService } from '../../common/web/base';

@Injectable()
export class SysDictTypeService extends IBaseService {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	constructor(
		@InjectRepository(SysDictTypeRepository)
		private tgtObjRepo:SysDictTypeRepository) {
		super();
	}

	async findAll(): Promise<SysDictTypeEntity[]>{
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<SysDictTypeEntity>{
		return await this.tgtObjRepo.findOneOrFail(_id);
	}

}
