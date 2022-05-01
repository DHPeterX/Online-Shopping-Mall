import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { SysDictLangEntity } from '../entity';

@EntityRepository(SysDictLangEntity)
export class SysDictLangRepository extends Repository<SysDictLangEntity>{
	private logger = new Logger('SysDictDataRepository', { timestamp: true });
}
