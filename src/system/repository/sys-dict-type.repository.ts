import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { SysDictTypeEntity , } from '../entity';

@EntityRepository(SysDictTypeEntity)
export class SysDictTypeRepository extends Repository<SysDictTypeEntity>{
	private logger = new Logger('SysDictDataRepository', { timestamp: true });
}
