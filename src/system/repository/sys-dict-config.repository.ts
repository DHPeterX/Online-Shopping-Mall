import { EntityRepository, Repository } from 'typeorm';
import { SysDictConfigEntity } from '../entity';
import { Logger } from '@nestjs/common';
import {
	SysDictConfigChangeStatusDto,
	SysDictConfigDispDto,
	SysDictConfigDispOrderDto,
} from '../dto/sys-dict-config.dto';

@EntityRepository(SysDictConfigEntity)
export class SysDictConfigRepository extends Repository<SysDictConfigEntity>{

	private logger = new Logger('SysDictDataRepository', { timestamp: true });

	async updateChangeStatus(inParams: SysDictConfigChangeStatusDto): Promise<void>{

		try{

		} catch (error){

		}

	}

	async updateStatus(inParams: SysDictConfigChangeStatusDto): Promise<void>{

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
