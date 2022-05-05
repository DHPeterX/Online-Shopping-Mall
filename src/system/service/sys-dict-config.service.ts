import { Injectable, Logger } from '@nestjs/common';
import { SysDictConfigRepository } from '../repository';
import {
	SysDictConfigChangeStatusDto,
	SysDictConfigDispDto,
	SysDictConfigDispOrderDto,
	SysDictConfigDto,
} from '../dto/sys-dict-config.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SysDictConfigEntity } from '../entity';
import { IBaseService } from '../../common/web/base';


@Injectable()
export class SysDictConfigService extends IBaseService {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	constructor(
		@InjectRepository(SysDictConfigRepository)
		private tgtObjRepo: SysDictConfigRepository) {
		super();
	}

	async findAll(): Promise<SysDictConfigEntity[]> {
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<SysDictConfigEntity> {
		return await this.tgtObjRepo.findOneOrFail(_id);
	}


	async createSysConfig(inParams: Partial<SysDictConfigDto>): Promise<any> {
		return;
	}

	async updateSysConfig(inParams: Partial<SysDictConfigDto>): Promise<any> {
		return;
	}

	async updateStatus(inParams: SysDictConfigChangeStatusDto): Promise<any> {
		return this.tgtObjRepo.updateStatus(inParams);
	}

	async updateSysDisp(inParams: SysDictConfigDispDto): Promise<any> {
		return this.tgtObjRepo.updateDisp(inParams);
	}

	async updateSysDispOrder(inParams: SysDictConfigDispOrderDto): Promise<any> {
		return await this.tgtObjRepo.updateDispOrder(inParams);
	}

}
