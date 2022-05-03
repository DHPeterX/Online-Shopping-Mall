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

@Injectable()
export class SysDictConfigService {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	constructor(
		@InjectRepository(SysDictConfigRepository)
		private sysDictConfigRepo: SysDictConfigRepository) {
	}

	async findAll(): Promise<SysDictConfigEntity[]> {
		return await this.sysDictConfigRepo.find();
	}

	async createSysConfig(inParams: Partial<SysDictConfigDto>): Promise<any> {
		return;
	}

	async updateSysConfig(inParams: Partial<SysDictConfigDto>): Promise<any> {
		return;
	}

	async updateStatus(inParams: SysDictConfigChangeStatusDto): Promise<any> {
		return this.sysDictConfigRepo.updateStatus(inParams);
	}

	async updateSysDisp(inParams: SysDictConfigDispDto): Promise<any> {
		return this.sysDictConfigRepo.updateDisp(inParams);
	}

	async updateSysDispOrder(inParams: SysDictConfigDispOrderDto): Promise<any> {
		return await this.sysDictConfigRepo.updateDispOrder(inParams);
	}

}
