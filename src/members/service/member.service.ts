import { Injectable, Logger } from '@nestjs/common';
import { MemberRepository } from '../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { SysDictConfigEntity } from '../../system/entity';
import { MemberEntity } from '../entity';
import { MemberCreateDto, MemberDto } from '../dto';

@Injectable()
export class MemberService {

	private logger = new Logger('MemberService', { timestamp: true });

	constructor(
		@InjectRepository(MemberRepository)
		private tgtObjRepo: MemberRepository,
	) {
	}

	async findAll(): Promise<MemberEntity[]> {
		return await this.tgtObjRepo.find();
	}

	async findOne(_id: string): Promise<MemberEntity>{
		return await this.tgtObjRepo.findOneOrFail(_id);
	}

	async createMember(inParams: MemberCreateDto):Promise<MemberEntity>{
		return await this.tgtObjRepo.createMember(inParams);
	}

	// create(inParams: MemberEntity) {
	//   const tgtObj = this.repo.create(inParams);
	//   return this.repo.save(tgtObj);
	// }

	// update(inParams: MemberEntity) {}

	// delete(inParams: MemberEntity) {}

	// findByEmail(email: string) {}

	// findByCellPhone(cellNo: string) {}

	// findByIdentityCard(idType: string, idValue: string) {}

	// findByMemberCard(mbrCardNo: string) {}
}
