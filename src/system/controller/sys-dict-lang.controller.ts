import { Controller, Logger } from '@nestjs/common';
import { IBaseController } from '../../common/web/base';

@Controller('/sys-dict/lang')
export class SysDictLangController extends IBaseController{

	private logger = new Logger('SysDictLangController', { timestamp: true });

	constructor() {
		super();
	}
}
