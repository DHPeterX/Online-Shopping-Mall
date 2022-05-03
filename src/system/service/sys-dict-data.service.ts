import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SysDictDataService {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	constructor() {
	}
}
