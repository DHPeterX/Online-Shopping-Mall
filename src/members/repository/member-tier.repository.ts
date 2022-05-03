import { Logger, NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { MemberEntity, MemberGradeEntity, MemberTierEntity } from '../entity';

@EntityRepository(MemberTierEntity)
export class MemberTierRepository extends Repository<MemberTierEntity> {

	private logger = new Logger('MemberTierRepository', { timestamp: true });

	async findOneWithAssured(id:string):Promise<MemberTierEntity>{
		const tgtObj:MemberTierEntity = await this.findOne(id);
		if(!tgtObj){
			throw new NotFoundException("Data Not Found");
		}
		return tgtObj;
	}

	async createMemberTier() :Promise<MemberTierEntity> {
		return;
	}

	async updateMemberTier() :Promise<MemberTierEntity> {
		return;
	}

	async deleteMemberTier() :Promise<MemberTierEntity> {
		return;
	}

	async updateStatus(inParams: any): Promise<MemberTierEntity> {

		try {

		} catch (error) {

		}
		return;
	}

	async updateDisp(inParams: any): Promise<MemberTierEntity> {

		try {

		} catch (error) {

		}
		return;
	}

	async updateDispOrder(inParams: any): Promise<MemberTierEntity> {

		try {

		} catch (error) {

		}
		return;
	}

}
