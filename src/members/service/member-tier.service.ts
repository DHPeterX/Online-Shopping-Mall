import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { MemberTierEntity } from '../entity/member-tier.entity';
import { MemberRepository, MemberTierRepository } from '../repository';

@Injectable()
export class MemberTierService {

	private logger = new Logger('MemberService', { timestamp: true });

	constructor(
		@InjectRepository(MemberTierRepository)
		private repo: MemberTierRepository,
	) {
	}


}
