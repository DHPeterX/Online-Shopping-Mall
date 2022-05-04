import { EntityRepository, Repository } from 'typeorm';
import { MemberEntity, MemberGradeEntity } from '../entity';
import { Logger, NotFoundException } from '@nestjs/common';
import { MemberCreateDto, MemberDto, MemberUpdateDto } from '../dto';

@EntityRepository(MemberEntity)
export class MemberRepository extends Repository<MemberEntity> {

	private logger = new Logger('MemberRepository', { timestamp: true });

	async findOneWithAssured(id:string):Promise<MemberEntity>{
		console.log('findOneWithAssured');
		const tgtObj:MemberEntity = await this.findOne(id);
		if(!tgtObj){
			throw new NotFoundException("Data Not Found");
		}
		return tgtObj;
	}

	async createMember(inParams: MemberCreateDto) :Promise<MemberEntity> {
		const tgtObj = this.create(inParams);
		try {
			await this.save(tgtObj);
		} catch (error){
			this.logger.error(error.message);
		}
		return await this.create(tgtObj);
	}

	async updateMember(inParams: MemberUpdateDto) :Promise<MemberEntity> {
		let tgtObj : MemberEntity = await this.findOneWithAssured(inParams.id);
		try {
			await this.update(inParams.id, inParams);
		} catch (error){
			this.logger.error(error.message);
		}
		return await this.findOneWithAssured(inParams.id);
	}

	async deleteMember(id:string) :Promise<MemberEntity> {
		let tgtObj : MemberEntity = await this.findOneWithAssured(id);
		try {
			await this.remove(tgtObj);
		} catch (error){
			this.logger.error(error.message);
		}
		return tgtObj;
	}

	async updateStatus(inParams: any): Promise<MemberEntity> {

		try {

		} catch (error) {

		}
		return;
	}

}
