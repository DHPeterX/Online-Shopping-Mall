import { IBaseController } from '../../common/web/base';
import { Logger } from '@nestjs/common';
import { SysLogOperService } from '../service';

export class SysLogOperController extends IBaseController {

	private logger = new Logger('SysLogOperController', { timestamp: true });

	constructor(private sysLogOperService: SysLogOperService) {
		super();
	}
}
