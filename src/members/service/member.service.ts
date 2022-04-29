import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../entity/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity) private repo: Repository<MemberEntity>,
  ) {}

  // create(inParams: MemberEntity) {
  //   const tgtObj = this.repo.create(inParams);
  //   return this.repo.save(tgtObj);
  // }

  // update(inParams: MemberEntity) {}

  // delete(inParams: MemberEntity) {}

  findById(id: string): any {
    const inParams: any = {

    }

    return 
  }

  // findByEmail(email: string) {}

  // findByCellPhone(cellNo: string) {}

  // findByIdentityCard(idType: string, idValue: string) {}

  // findByMemberCard(mbrCardNo: string) {}
}
