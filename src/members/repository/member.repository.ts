import { EntityRepository, Repository } from 'typeorm';
import { MemberEntity, MemberGradeEntity } from '../entity';
import { Logger } from '@nestjs/common';
import { MemberCreateDto, MemberDto } from '../dto';

@EntityRepository(MemberEntity)
export class MemberRepository extends Repository<MemberEntity> {

	private logger = new Logger('MemberRepository', { timestamp: true });

	async createMember(inParams: MemberCreateDto) :Promise<MemberEntity> {

		this.logger.log( inParams );
		// const tgtObj: { genderCd: string; name: string; mbrTierCd: string; mbrGradeCd: string } = {
		// 	genderCd: inParams.genderCd,
		// 	name: inParams.name,
		// 	mbrGradeCd: "00",
		// 	mbrTierCd: "00",
		// }

		const tgtObj = this.create(inParams);
		try {
			await this.save(tgtObj);
		} catch (error){
			this.logger.error(error.message);
		}
		return await this.create(inParams);
	}

	async updateMember() :Promise<MemberEntity> {
		return;
	}

	async deleteMember() :Promise<MemberEntity> {
		return;
	}

	async updateStatus(inParams: any): Promise<MemberEntity> {

		try {

		} catch (error) {

		}
		return;
	}

}
