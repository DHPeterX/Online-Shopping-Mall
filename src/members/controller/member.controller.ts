import { Body, Controller, Delete, Get, Logger, Param, Post } from '@nestjs/common';
import { IBaseController } from '../../common/web/base/i-controller.base';
import { MemberService } from '../service';
import { SysDictConfigEntity } from '../../system/entity';
import {
	SysDictConfigDispDto,
	SysDictConfigDispOrderDto,
	SysDictConfigDto,
} from '../../system/dto/sys-dict-config.dto';
import { MemberEntity } from '../entity';
import { Observable } from 'rxjs';
import { MemberCreateDto, MemberDto, MemberUpdateDto } from '../dto';

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
