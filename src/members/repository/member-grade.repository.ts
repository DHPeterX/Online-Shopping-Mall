import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { MemberGradeEntity } from '../entity';
import { SysDictConfigDispDto, SysDictConfigDispOrderDto } from '../../system/dto/sys-dict-config.dto';
import { MemberGradeDto } from '../dto';

@EntityRepository(MemberGradeEntity)
export class MemberGradeRepository extends Repository<MemberGradeEntity> {

	private logger = new Logger('MemberGradeRepository', { timestamp: true });

	async createMemberGrade() :Promise<MemberGradeEntity> {
		return;
	}

	async updateMemberGrade() :Promise<MemberGradeEntity> {
		return;
	}

	async deleteMemberGrade() :Promise<MemberGradeEntity> {
		return;
	}

	async updateStatus(inParams: any): Promise<MemberGradeEntity> {

		try {

		} catch (error) {

		}
		return;
	}

	async updateDisp(inParams: any): Promise<MemberGradeEntity> {

		try {

		} catch (error) {

		}
		return;
	}

	async updateDispOrder(inParams: any): Promise<MemberGradeEntity> {

		try {

		} catch (error) {

		}
		return;
	}

}
