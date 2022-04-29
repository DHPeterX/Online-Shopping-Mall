import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  MemberEntity,
  MemberGradeEntity,
  MemberPromoteHistoryEntity,
  MemberTierEntity,
} from './entity';

import {
  MemberController,
  MemberGradeController,
  MemberTierController,
} from './controller';

import {
  MemberService,
  MemberGradeService,
  MemberTierService,
} from './service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MemberEntity,
      MemberGradeEntity,
      MemberTierEntity,
    ]),
  ],
  controllers: [MemberController, MemberGradeController, MemberTierController],
  providers: [MemberService, MemberGradeService, MemberTierService],
})
export class MembersModule {}
