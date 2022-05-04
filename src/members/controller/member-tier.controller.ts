import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { IBaseController } from 'src/common/web/base/i-controller.base';
import { MemberTierService } from '../service';
import { MemberGradeDto, MemberTierCreateDto, MemberTierUpdateDto } from '../dto';
import { MemberGradeEntity, MemberTierEntity } from '../entity';

@Controller('member-tier')
export class MemberTierController extends IBaseController {
	private logger = new Logger('MemberTierController', { timestamp: true });

	constructor(
		private memberTierService: MemberTierService)
	{
		super();
	}

	@Get()
	async getAll(): Promise<MemberTierEntity[]> {
		return await this.memberTierService.findAll();
	}

	@Get('/:id')
	async getOne(@Param() id?: string): Promise<MemberTierEntity> {
		this.logger.log(id);
		return await this.memberTierService.findOne(id);
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
