import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { MemberTierEntity } from '../entity';

@EntityRepository(MemberTierEntity)
export class MemberTierRepository extends Repository<MemberTierEntity> {

	private logger = new Logger('MemberTierRepository', { timestamp: true });

}
