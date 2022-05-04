import { Controller, Logger } from '@nestjs/common';
import { IBaseController } from '../../common/web/base';

@Controller('/sys-dict/selTag')
export class SysDictSelTagController extends IBaseController{

	private logger = new Logger('SysDictSelTagController', { timestamp: true });

	constructor() {
		super();
	}

}
