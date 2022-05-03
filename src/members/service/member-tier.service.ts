import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { MemberTierEntity } from '../entity/member-tier.entity';
import { MemberRepository, MemberTierRepository } from '../repository';
import { MemberGradeEntity } from '../entity';

@Injectable()
export class MemberTierService {

	private logger = new Logger('MemberService', { timestamp: true });

	constructor(
		@InjectRepository(MemberTierRepository)
		private tgtObjRepo: MemberTierRepository,
	) {
	}

	async findAll(): Promise<MemberTierEntity[]> {
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<MemberTierEntity>{
		return await this.tgtObjRepo.findOneOrFail(_id);
	}

}
