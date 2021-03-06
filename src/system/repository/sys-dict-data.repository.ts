import { EntityRepository, Repository } from 'typeorm';
import { SysDictConfigEntity, SysDictDataEntity } from '../entity';
import { Logger, NotFoundException } from '@nestjs/common';
import {
	SysDictConfigCreateDto,
	SysDictConfigDeleteDto,
	SysDictConfigDispDto, SysDictConfigDispOrderDto,
	SysDictConfigUpdateDto,
} from '../dto/sys-dict-config.dto';

@EntityRepository(SysDictDataEntity)
export class SysDictDataRepository extends Repository<SysDictDataEntity> {

	private logger = new Logger('SysDictDataRepository', { timestamp: true });

	async findOneWithAssured(id:string):Promise<SysDictDataEntity>{
		const tgtObj:SysDictDataEntity = await this.findOne(id);
		if(!tgtObj){
			throw new NotFoundException("Data Not Found");
		}
		return tgtObj;
	}

	async createSysDictData(inParams: Partial<SysDictConfigCreateDto>): Promise<SysDictConfigEntity> {
		return;
	}

	async updateSysDictData(inParams: Partial<SysDictConfigUpdateDto>): Promise<SysDictConfigEntity> {
		return;
	}

	async deleteSysDictData(inParams: Partial<SysDictConfigDeleteDto>): Promise<SysDictConfigEntity> {
		return;
	}

	async updateStatus(inParams: any): Promise<void> {

		try {

		} catch (error) {

		}

	}

	async updateDisp(inParams: SysDictConfigDispDto): Promise<void> {

		try {

		} catch (error) {

		}

	}

	async updateDispOrder(inParams: SysDictConfigDispOrderDto): Promise<void> {

		try {

		} catch (error) {

		}

	}

}
