import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SysDictLangService{

	private logger = new Logger('SysDictConfigService', {timestamp: true});

	constructor() {
	}
}
