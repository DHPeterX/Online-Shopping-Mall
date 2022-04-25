import { Module } from '@nestjs/common';
import { Member } from "./entity/member.entity";
import { MemberGradeEntity } from './entity/member-grade.entity';
import { MemberTierEntity } from './entity/member-tier.entity';
import { MemberPromoteHistoryEntity } from './entity/member-promote-hst.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberController } from './controller/member.controller';
import { MemberService } from './service/member.service';
import {MemberGradeController} from "./controller/member-grade.controller";
import {MemberTierController} from "./controller/member-tier.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Member, MemberGradeEntity, MemberTierEntity, MemberPromoteHistoryEntity])],
  controllers: [MemberController, MemberGradeController, MemberTierController],
  providers: [MemberService],
})
export class MembersModule { }
