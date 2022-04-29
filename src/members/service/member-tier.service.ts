import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { MemberTierEntity } from '../entity/member-tier.entity';

@Injectable()
export class MemberTierService {
  constructor(
    @InjectRepository(MemberTierEntity)
    private repo: Repository<MemberTierEntity>,
  ) {}

  
}
