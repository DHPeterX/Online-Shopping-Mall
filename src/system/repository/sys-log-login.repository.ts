import { Logger, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { SysDictConfigEntity, SysDictSelTagEntity, SysDictTypeEntity } from '../entity';
import {
	SysDictConfigCreateDto,
	SysDictConfigDeleteDto,
	SysDictConfigDispDto, SysDictConfigDispOrderDto,
	SysDictConfigUpdateDto,
} from '../dto/sys-dict-config.dto';
import { SysLogOperEntity } from '../entity/sys-log-oper.entity';
import { SysLogLoginEntity } from '../entity/sys-log-login.entity';

@EntityRepository(SysLogLoginEntity)
export class SysLogLoginRepository extends Repository<SysLogLoginEntity> {

	private logger = new Logger('SysLogLoginRepository', { timestamp: true });

	async findOneWithAssured(id:string):Promise<SysLogLoginEntity>{
		const tgtObj:SysLogLoginEntity = await this.findOne(id);
		if(!tgtObj){
			throw new NotFoundException("Data Not Found");
		}
		return tgtObj;
	}

}
