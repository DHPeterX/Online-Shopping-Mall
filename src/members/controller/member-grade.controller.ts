import { Controller, Get, Logger, Param } from '@nestjs/common';
import { IBaseController } from 'src/common/web/base';
import { MemberGradeService } from '../service';
import { MemberGradeEntity } from '../entity';

@Controller('member-grade')
export class MemberGradeController extends IBaseController {
	private logger = new Logger('MemberGradeController', { timestamp: true });

	constructor(
		private memberGradeService: MemberGradeService) {
		super();
	}

	@Get()
	async getAll(): Promise<MemberGradeEntity[]> {
		return await this.memberGradeService.findAll();
	}

	@Get('/:id')
	async getOne(@Param() id?: string): Promise<MemberGradeEntity> {
		this.logger.log(id);
		return await this.memberGradeService.findOne(id);
	}

}
