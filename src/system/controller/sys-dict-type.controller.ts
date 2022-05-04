import { Controller, Logger } from '@nestjs/common';
import { IBaseController } from '../../common/web/base';

@Controller('/sys-dict/type')
export class SysDictTypeController extends IBaseController{

	private logger = new Logger('SysDictTypeController', { timestamp: true });

	constructor() {
		super();
	}
}
