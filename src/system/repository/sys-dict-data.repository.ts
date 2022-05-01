import { EntityRepository, Repository } from 'typeorm';
import { SysDictDataEntity } from '../entity';
import { Logger } from '@nestjs/common';

@EntityRepository(SysDictDataEntity)
export class SysDictDataRepository extends Repository<SysDictDataEntity>{

	private logger = new Logger('SysDictDataRepository', { timestamp: true });

}
