import { Module } from '@nestjs/common';
import { Member } from "./entity/member.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberController } from './controller/member.controller';
import { MemberService } from './service/member.service';
import {MemberGradeController} from "./controller/member-grade.controller";
import {MemberTierController} from "./controller/member-tier.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  controllers: [MemberController, MemberGradeController, MemberTierController],
  providers: [MemberService],
})
export class MembersModule { }
