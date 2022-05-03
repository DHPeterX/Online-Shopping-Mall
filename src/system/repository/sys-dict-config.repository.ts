import { EntityRepository, Repository } from 'typeorm';
import { SysDictConfigEntity } from '../entity';
import { Logger, NotFoundException } from '@nestjs/common';
import {
	SysDictConfigCreateDto,
	SysDictConfigDeleteDto,
	SysDictConfigDispDto,
	SysDictConfigDispOrderDto,
	SysDictConfigUpdateDto,
} from '../dto/sys-dict-config.dto';
import { MemberGradeEntity } from '../../members/entity';

@EntityRepository(SysDictConfigEntity)
export class SysDictConfigRepository extends Repository<SysDictConfigEntity> {

	private logger = new Logger('SysDictConfigRepository', { timestamp: true });

	async findOneWithAssured(id:string):Promise<SysDictConfigEntity>{
		const tgtObj:SysDictConfigEntity = await this.findOne(id);
		if(!tgtObj){
			throw new NotFoundException("Data Not Found");
		}
		return tgtObj;
	}

	async createSysDictConfig(inParams: Partial<SysDictConfigCreateDto>): Promise<SysDictConfigEntity> {
		return;
	}

	async updateSysDictConfig(inParams: Partial<SysDictConfigUpdateDto>): Promise<SysDictConfigEntity> {
		return;
	}

	async deleteSysDictConfig(inParams: Partial<SysDictConfigDeleteDto>): Promise<SysDictConfigEntity> {
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
