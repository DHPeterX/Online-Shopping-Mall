import { Body, Controller, Delete, Get, Logger, Param, Post } from '@nestjs/common';
import { IBaseController } from '../../common/web/base/i-base.controller';
import { MemberService } from '../service';
import { SysDictConfigEntity } from '../../system/entity';
import {
	SysDictConfigDispDto,
	SysDictConfigDispOrderDto,
	SysDictConfigDto,
} from '../../system/dto/sys-dict-config.dto';
import { MemberEntity } from '../entity';
import { Observable } from 'rxjs';
import { MemberCreateDto, MemberDto } from '../dto';

@Controller('member')
export class MemberController extends IBaseController {

	private logger = new Logger('MemberController', { timestamp: true });

	constructor(
		private memberService: MemberService
	) {
		super();
	}

	@Get()
	async getAll(): Promise<MemberEntity[]> {
		return await this.memberService.findAll();
	}

	@Get('/:id')
	async getOne(@Param() id?: string): Promise<MemberEntity> {
		this.logger.log(id);
		return await this.memberService.findOne(id);
	}

	@Post()
	create(@Body() inParams: MemberCreateDto): Promise<MemberEntity> {
		return this.memberService.createMember(inParams);
	}

	@Post('/:id')
	async update(@Param() id: string, @Body() inParams: MemberDto): Promise<MemberEntity> {
		return;
	}

	@Post('/:id/updateDisp')
	async updateDisp(@Param() id: string, @Body() inParams: MemberDto): Promise<MemberEntity> {
		this.logger.log({ id, inParams });
		return;
	}

	@Post('/:id/updateDispOrd')
	async updateDispOrd(@Param() id: string, @Body() inParams: MemberDto): Promise<MemberEntity> {
		this.logger.log({ id, inParams });
		return ;
	}

	@Delete('/:id')
	async delete(@Param() id: string): Promise<void> {
		this.logger.log({ id });
	}
}
