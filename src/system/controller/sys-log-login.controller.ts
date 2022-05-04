import { IBaseController } from '../../common/web/base';
import { Logger } from '@nestjs/common';
import { SysLogLoginService } from '../service';

export class SysLogLoginController extends IBaseController {

	private logger = new Logger('SysLogLoginController', { timestamp: true });

	constructor(private sysLogLoginService: SysLogLoginService) {
		super();
	}

}
