import { Logger, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { SysDictConfigEntity, SysDictLangEntity, SysDictSelTagEntity } from '../entity';
import {
	SysDictConfigCreateDto,
	SysDictConfigDeleteDto,
	SysDictConfigDispDto, SysDictConfigDispOrderDto,
	SysDictConfigUpdateDto,
} from '../dto/sys-dict-config.dto';

@EntityRepository(SysDictSelTagEntity)
export class SysDictSelTagRepository extends Repository<SysDictSelTagEntity> {

	private logger = new Logger('SysDictSelTagRepository', { timestamp: true });

	async findOneWithAssured(id:string):Promise<SysDictSelTagEntity>{
		const tgtObj:SysDictSelTagEntity = await this.findOne(id);
		if(!tgtObj){
			throw new NotFoundException("Data Not Found");
		}
		return tgtObj;
	}

	async createSysDictTag(inParams: Partial<SysDictConfigCreateDto>): Promise<SysDictConfigEntity> {
		return;
	}

	async updateSysDictTag(inParams: Partial<SysDictConfigUpdateDto>): Promise<SysDictConfigEntity> {
		return;
	}

	async deleteSysDictTag(inParams: Partial<SysDictConfigDeleteDto>): Promise<SysDictConfigEntity> {
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
