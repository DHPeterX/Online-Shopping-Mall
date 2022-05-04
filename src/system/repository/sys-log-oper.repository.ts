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

@EntityRepository(SysLogOperEntity)
export class SysLogOperRepository extends Repository<SysLogOperEntity> {

	private logger = new Logger('SysLogOperRepository', { timestamp: true });

	async findOneWithAssured(id:string):Promise<SysLogOperEntity>{
		const tgtObj:SysLogOperEntity = await this.findOne(id);
		if(!tgtObj){
			throw new NotFoundException("Data Not Found");
		}
		return tgtObj;
	}

}
