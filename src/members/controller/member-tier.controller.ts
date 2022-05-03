import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { IBaseController } from 'src/common/web/base/i-base.controller';
import { MemberTierService } from '../service';
import { MemberGradeDto, MemberTierCreateDto, MemberTierUpdateDto } from '../dto';

@Controller('member-tier')
export class MemberTierController extends IBaseController {
	private logger = new Logger('MemberTierController', { timestamp: true });

	constructor(private memberTierService: MemberTierService) {
		super();
	}

	@Get('')
	async findAll(): Promise<MemberGradeDto[]> {
		//return this.memberTierService.findAll();
		return;
	}

	@Get('/:id')
	async findOne(@Param() id: string): Promise<MemberGradeDto> {
		return {};
	}

	@Post()
	async create(@Body() inParams: MemberTierCreateDto): Promise<void> {
		const resultVal = {};

		return;
	}

	@Put('/:id')
	async update(@Param() id: string, @Body() inParams: MemberTierUpdateDto): Promise<void> {
		const resultVal = {};

		return;
	}

	@Delete('/:id')
	async delete(@Param() id: string): Promise<void> {
		const resultVal = {};

		return;
	}
}
