import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { SysDictConfigService } from './sys-dict-config.service';
import { SysDictLangService } from './sys-dict-lang.service';
import { SysDictTypeService } from './sys-dict-type.service';

@Injectable()
export class SysDictInitService implements OnApplicationBootstrap {

	private logger = new Logger('SysDictConfigService', { timestamp: true });

	/** Implement for Caching Service :
	 *  Load Before Startup Full Service
	 *
	 * */
	constructor(
		private sysDictConfigService: SysDictConfigService
		, private sysDictLangService: SysDictLangService
		, private sysDictTypeService: SysDictTypeService,
	) {
	}

	// onModuleInit(): any {
	// 	console.log("Init Testing...");
	// 	this.helloWorld();
	// }

	// helloWorld(){
	// 	console.log("Init Testing...- helloWorld");
	// }

	onApplicationBootstrap(): any {

		console.log('Init Testing...');

	}
}
