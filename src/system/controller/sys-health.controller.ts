import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ControllerException } from '../../common/core/exceptions';
import { IBaseController } from '../../common/web/base';

@Controller('/sys-health')
export class SysHealthController extends IBaseController {

	constructor() {
		super();
	}

	@Get('/alive')
	async testAlive(): Promise<any>{
		this.throwMessage("Fucking Aws");
	}
}

