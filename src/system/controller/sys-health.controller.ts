import { Controller, Get } from '@nestjs/common';
import { IBaseController } from '../../common/web/base';
import { CommonUtils } from '../../common/core/utils';

@Controller('/sys-health')
export class SysHealthController extends IBaseController {

	constructor() {
		super();
	}

	@Get('/alive')
	async testAlive(): Promise<any>{
		this.throwErrorMessage("");
	}

	@Get('/testFormat')
	async testFormat(): Promise<any>{
		console.log(CommonUtils.fmtToBoolean(""));
	}

}

