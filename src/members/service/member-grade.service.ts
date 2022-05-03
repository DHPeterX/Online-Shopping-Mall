import { Repository } from 'typeorm';
import { MemberGradeEntity } from '../entity/member-grade.entity';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberGradeRepository } from '../repository';
import { MemberEntity } from '../entity';

@Injectable()
export class MemberGradeService{

	private logger = new Logger('MemberService', { timestamp: true });

	constructor(
		@InjectRepository(MemberGradeRepository)
		private tgtObjRepo: MemberGradeRepository) {
	}

	async findAll(): Promise<MemberGradeEntity[]> {
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<MemberGradeEntity>{
		return await this.tgtObjRepo.findOneOrFail(_id);
	}

}
