import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from '../entity/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {
    constructor(@InjectRepository(Member) private repo: Repository<Member>) { }

    create(inParams: Member) {
        const tgtObj = this.repo.create(inParams);
        return this.repo.save(tgtObj);
    }

    update(inParams: Member) { }

    delete(inParams: Member) { }

    findById(id: string) { }

    findByEmail(email: string) { }

    findByCellPhone(cellNo: string) { }

    findByIdentityCard(idType: string, idValue: string) { }

    findByMemberCard(mbrCardNo: string,) { }
}
