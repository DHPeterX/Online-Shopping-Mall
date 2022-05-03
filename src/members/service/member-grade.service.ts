import { Repository } from 'typeorm';
import { MemberGradeEntity } from '../entity/member-grade.entity';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberGradeRepository } from '../repository';

@Injectable()
export class MemberGradeService{
	private logger = new Logger('MemberService', { timestamp: true });
	constructor(@InjectRepository(MemberGradeRepository) private repo: MemberGradeRepository) {
	}

}
