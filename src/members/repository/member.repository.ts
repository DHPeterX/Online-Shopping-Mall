import { EntityRepository, Repository } from 'typeorm';
import { MemberEntity } from '../entity';
import { Logger } from '@nestjs/common';

@EntityRepository(MemberEntity)
export class MemberRepository extends Repository<MemberEntity> {
  private logger = new Logger('MemberRepository', { timestamp: true });
}
