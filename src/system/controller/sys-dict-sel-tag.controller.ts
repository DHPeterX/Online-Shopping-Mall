import { Controller, Logger } from '@nestjs/common';

@Controller('/sys-dict/selTag')
export class SysDictSelTagController {

	private logger = new Logger('SysDictSelTagController', { timestamp: true });

}
