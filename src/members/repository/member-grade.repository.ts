import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { MemberGradeEntity } from '../entity';

@EntityRepository(MemberGradeEntity)
export class MemberGradeRepository extends Repository<MemberGradeEntity> {

	private logger = new Logger('MemberGradeRepository', { timestamp: true });

}
