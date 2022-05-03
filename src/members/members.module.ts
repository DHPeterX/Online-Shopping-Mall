import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberController, MemberGradeController, MemberTierController } from './controller';
import { MemberGradeService, MemberService, MemberTierService } from './service';
import { MemberGradeRepository, MemberRepository, MemberTierRepository } from './repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			MemberRepository,
			MemberGradeRepository,
			MemberTierRepository,
		]),
	],
	providers: [MemberService, MemberGradeService, MemberTierService],
	controllers: [MemberController, MemberGradeController, MemberTierController],
	exports:[]
})
export class MembersModule {
}
