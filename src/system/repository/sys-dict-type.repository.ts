import { Logger, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { SysDictConfigEntity, SysDictSelTagEntity, SysDictTypeEntity } from '../entity';
import {
	SysDictConfigCreateDto,
	SysDictConfigDeleteDto,
	SysDictConfigDispDto, SysDictConfigDispOrderDto,
	SysDictConfigUpdateDto,
} from '../dto/sys-dict-config.dto';

@EntityRepository(SysDictTypeEntity)
export class SysDictTypeRepository extends Repository<SysDictTypeEntity> {

	private logger = new Logger('SysDictDataRepository', { timestamp: true });

	async findOneWithAssured(id:string):Promise<SysDictTypeEntity>{
		const tgtObj:SysDictTypeEntity = await this.findOne(id);
		if(!tgtObj){
			throw new NotFoundException("Data Not Found");
		}
		return tgtObj;
	}

	async createSysDictType(inParams: Partial<SysDictConfigCreateDto>): Promise<SysDictConfigEntity> {
		return;
	}

	async updateSysDictType(inParams: Partial<SysDictConfigUpdateDto>): Promise<SysDictConfigEntity> {
		return;
	}

	async deleteSysDictType(inParams: Partial<SysDictConfigDeleteDto>): Promise<SysDictConfigEntity> {
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
