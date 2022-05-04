import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ControllerException } from '../../common/core/exceptions';

@Controller('/sys-health')
export class SysHealthController {

	@Get('/alive')
	async testAlive(): Promise<any>{
		throw new ControllerException("System Running...", HttpStatus.OK);
	}
}

