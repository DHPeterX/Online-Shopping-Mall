import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SysDictTypeService{

	private logger = new Logger('SysDictConfigService', {timestamp: true});

	constructor() {
	}

}
