import { Controller, Get, Logger } from '@nestjs/common';
import { IBaseController } from '../../common/web/base';
import { CommonUtils } from '../../common/core/utils';
import { BusinessException, ControllerException, ServiceException } from '../../common/core/exceptions';

@Controller('/sys-health')
export class SysHealthController extends IBaseController {

	private logger = new Logger('SysHealthController', { timestamp: true });

	constructor() {
		super();
	}

	@Get('/alive')
	async testAlive(): Promise<any>{
		this.throwErrorMessage("tesst");
	}

	@Get('/testFormat')
	async testFormat(): Promise<any>{
		console.log(CommonUtils.fmtToBoolean(""));
	}

	@Get('/testControllerException')
	async testControllerException(): Promise<any>{
		throw new ControllerException("ControllerException HEHEH");
	}

	@Get('/testServiceException')
	async testServiceException(): Promise<any>{
		throw new ServiceException("ServiceException KAKAKA");
	}
}

