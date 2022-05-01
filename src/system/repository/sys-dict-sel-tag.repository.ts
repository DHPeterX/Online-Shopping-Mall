import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { SysDictSelTagEntity } from '../entity';

@EntityRepository(SysDictSelTagEntity)
export class SysDictSelTagRepository extends Repository<SysDictSelTagEntity>{
	private logger = new Logger('SysDictSelTagRepository', { timestamp: true });
}
