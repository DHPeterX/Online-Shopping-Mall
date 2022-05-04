import { Body, Controller, Delete, Get, Logger, Param, Post } from '@nestjs/common';
import { SysDictDataDto } from '../dto/sys-dict-data.dto';
import { IBaseController } from '../../common/web/base';


@Controller('/sys-dict/data')
export class SysDictDataController extends IBaseController {

	private logger = new Logger('SysDictDataController', { timestamp: true });

	constructor() {
		super();
	}

	@Get()
	async getAll(): Promise<SysDictDataDto[]> {
		return;
	}

	@Get('/:id')
	async getOne(@Param() id: string): Promise<SysDictDataDto> {
		return;
	}

	@Post()
	async create(@Body() inParams: SysDictDataDto): Promise<void> {
		return;
	}

	@Post('/:id')
	async update(@Param() id: string, @Body() inParams: any): Promise<void> {
		this.logger.log({ id, inParams });
	}

	@Post('/:id/updateDisp')
	async updateDisp(@Param() id: string, @Body() inParams: SysDictDataDto): Promise<void> {
		this.logger.log({ id, inParams });
	}

	@Post('/:id/updateDispOrd')
	async updateDispOrd(@Param() id: string, @Body() inParams: SysDictDataDto): Promise<void> {
		this.logger.log({ id, inParams });
	}

	@Delete('/:id')
	async delete(@Param() id: string): Promise<void> {
		this.logger.log({ id });
	}

}
