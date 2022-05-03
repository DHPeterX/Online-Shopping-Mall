import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SysDictSelTagService{

	private logger = new Logger('SysDictConfigService', {timestamp: true});

	constructor() {
	}
}
