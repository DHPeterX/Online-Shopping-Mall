import { Injectable, Logger } from '@nestjs/common';
import { MemberRepository } from '../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../entity';
import { MemberCreateDto, MemberDto, MemberUpdateDto } from '../dto';

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
		return await this.tgtObjRepo.findOneWithAssured(_id);
	}

	async createMember(inParams: MemberCreateDto):Promise<MemberEntity>{
		return await this.tgtObjRepo.createMember(inParams);
	}

	async updateMember(inParams: MemberUpdateDto):Promise<MemberEntity>{
		return await this.tgtObjRepo.updateMember(inParams);
	}

	async deleteMember(id:string):Promise<MemberEntity>{
		return await this.tgtObjRepo.deleteMember(id);
	}

	// delete(inParams: MemberEntity) {}

	// findByEmail(email: string) {}

	// findByCellPhone(cellNo: string) {}

	// findByIdentityCard(idType: string, idValue: string) {}

	// findByMemberCard(mbrCardNo: string) {}
}
