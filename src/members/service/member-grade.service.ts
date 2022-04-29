import { Repository } from 'typeorm';
import { MemberGradeEntity } from '../entity/member-grade.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberGradeService extends Repository<MemberGradeEntity>{



}
