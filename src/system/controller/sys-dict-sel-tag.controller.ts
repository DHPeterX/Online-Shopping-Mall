import { Controller, Logger } from '@nestjs/common';
import { IBaseController } from '../../common/web/base';
import { SysDictSelTagService } from '../service';

@Controller('/sys-dict/selTag')
export class SysDictSelTagController extends IBaseController{

	private logger = new Logger('SysDictSelTagController', { timestamp: true });

	constructor(private sysDictSelTagService: SysDictSelTagService) {
		super();
	}

}
