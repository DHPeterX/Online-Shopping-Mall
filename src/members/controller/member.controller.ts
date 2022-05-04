import { Body, Controller, Delete, Get, Logger, Param, Post, UseInterceptors } from '@nestjs/common';
import { IBaseController } from '../../common/web/base/i-controller.base';
import { MemberService } from '../service';
import { MemberEntity } from '../entity';
import { MemberCreateDto, MemberUpdateDto } from '../dto';
import { LoggingInterceptor } from '../../common/core/interceptors/logging.interceptor';

@Controller('member')
export class MemberController extends IBaseController {

	private logger = new Logger('MemberController', { timestamp: true });

	constructor(
		private memberService: MemberService,
	) {
		super();
	}

	@UseInterceptors(LoggingInterceptor)
	@Get()
	async getAll(): Promise<MemberEntity[]> {
		return await this.memberService.findAll();
	}

	@Get('/:id')
	async getOne(@Param() id?: string): Promise<MemberEntity> {
		return await this.memberService.findOne(id);
	}

	@Post()
	async create(@Body() inParams: MemberCreateDto): Promise<MemberEntity> {
		return await this.memberService.createMember(inParams);
	}

	@Post('/:id')
	async update(@Param() id: string, @Body() inParams: MemberUpdateDto): Promise<MemberEntity> {
		return await this.memberService.updateMember(inParams);
	}

	@Delete('/:id')
	async delete(@Param() id: string): Promise<void> {
		await this.memberService.deleteMember(id);
	}
}
