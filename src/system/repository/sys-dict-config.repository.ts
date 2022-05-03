import { EntityRepository, Repository } from 'typeorm';
import { SysDictConfigEntity } from '../entity';
import { Logger } from '@nestjs/common';
import {
	SysDictConfigChangeStatusDto, SysDictConfigCreateDto, SysDictConfigDeleteDto,
	SysDictConfigDispDto,
	SysDictConfigDispOrderDto, SysDictConfigDto, SysDictConfigUpdateDto,
} from '../dto/sys-dict-config.dto';

@EntityRepository(SysDictConfigEntity)
export class SysDictConfigRepository extends Repository<SysDictConfigEntity>{

	private logger = new Logger('SysDictDataRepository', { timestamp: true });



	async getByUUIDAssure(id: string){

	}

	async getByUUID(id: string){

	}

	async getOne(){

	}

	async createSysDictConfig(inParams: Partial<SysDictConfigCreateDto>) : Promise<SysDictConfigEntity>{
		return;
	}

	async updateSysDictConfig(inParams: Partial<SysDictConfigUpdateDto>) : Promise<SysDictConfigEntity>{
		return;
	}

	async deleteSysDictConfig(inParams: Partial<SysDictConfigDeleteDto>) : Promise<SysDictConfigEntity>{
		return;
	}

	async updateStatus(inParams: any): Promise<void>{

		try{

		} catch (error){

		}

	}

	async updateDisp(inParams: SysDictConfigDispDto): Promise<void>{

		try{

		} catch (error){

		}

	}

	async updateDispOrder(inParams: SysDictConfigDispOrderDto): Promise<void>{

		try {

		} catch (error){

		}

	}

}
