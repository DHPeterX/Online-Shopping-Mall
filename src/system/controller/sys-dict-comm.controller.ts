import { Body, Controller, Get, Logger, Param } from '@nestjs/common';
import { SysDictSelTagDto } from '../dto/sys-dict-sel-tag.dto';
import { SysDictSelTagService, SysDictTypeService } from '../service';
import { IBaseController } from '../../common/web/base';


@Controller('/sys-comm')
export class SysDictCommController extends IBaseController {

	private logger = new Logger('SysDictCommController', { timestamp: true });

	constructor(
		private sysTabTagService: SysDictSelTagService
		, private sysDictTypeService: SysDictTypeService
	) {
		super();
	}

	/**
	 * System Public Function
	 * */
	@Get('/config/:configId')
	async getConfigById(@Param('configId') configId: string) : Promise<string> {
		// TODO: sysTabTagService >> Fetch From Caching Service
		return;
	}

	@Get('/dictTags')
	async fetchDictSelTag() {
		// TODO: sysTabTagService >> Fetch From Caching Service
	}

	@Get('/tablTags')
	async fetchTableSelTag(@Body() inParams: SysDictSelTagDto): Promise<any>{
		// TODO: sysTabTagService >> Fetch From Caching Service
	}

}
