import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { MemberGradeEntity, MemberTierEntity } from '../entity';

@EntityRepository(MemberTierEntity)
export class MemberTierRepository extends Repository<MemberTierEntity> {

	private logger = new Logger('MemberTierRepository', { timestamp: true });

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
