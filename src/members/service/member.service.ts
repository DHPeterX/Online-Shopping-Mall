import { Injectable, Logger } from '@nestjs/common';
import { MemberRepository } from '../repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemberService {
	private logger = new Logger('MemberService', { timestamp: true });

	constructor(
		@InjectRepository(MemberRepository) private repo: MemberRepository,
	) {
	}

	// create(inParams: MemberEntity) {
	//   const tgtObj = this.repo.create(inParams);
	//   return this.repo.save(tgtObj);
	// }

	// update(inParams: MemberEntity) {}

	// delete(inParams: MemberEntity) {}

	findById(id: string): any {
		const inParams: any = {};

		return;
	}

	// findByEmail(email: string) {}

	// findByCellPhone(cellNo: string) {}

	// findByIdentityCard(idType: string, idValue: string) {}

	// findByMemberCard(mbrCardNo: string) {}
}
