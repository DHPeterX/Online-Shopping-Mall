import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	SysDictCommController,
	SysDictConfigController,
	SysDictDataController,
	SysDictSelTagController,
	SysDictTypeController,
} from './controller';
import { SysDictLangController } from './controller/sys-dict-lang.controller';
import {
	SysDictConfigService,
	SysDictDataService,
	SysDictLangService,
	SysDictSelTagService,
	SysDictTypeService,
} from './service';
import {
	SysDictConfigRepository,
	SysDictDataRepository,
	SysDictLangRepository,
	SysDictSelTagRepository,
	SysDictTypeRepository, SysLogLoginRepository, SysLogOperRepository,
} from './repository';
import { SysHealthController } from './controller/sys-health.controller';
import { SysLogLoginService } from './service/sys-log-login.service';
import { SysLogOperService } from './service/sys-log-oper.service';

/**
 * System Modules:
 * - Default Structure: Controller > Service > Repository [Entity] > DB
 * - Func Feature List:
 *      -> System Config:
 *      -> System Dict. Type & Data     (Selection Tags)
 *      -> System Dict. Table           (Selection Tags)
 *      -> System Dict. Language        (Multiple Language (Export to Json & Reload))
 *      -> System Logging Service:
 *              -> Login Log
 *              -> Operation Log
 *     -> System Tasks
 * */
@Module({
	imports: [
		TypeOrmModule.forFeature([SysDictConfigRepository, SysDictTypeRepository, SysDictDataRepository
			, SysDictLangRepository, SysDictSelTagRepository, SysLogOperRepository, SysLogLoginRepository]),
	],
	controllers: [SysHealthController, SysDictConfigController, SysDictTypeController, SysDictDataController
		, SysDictLangController, SysDictSelTagController ,SysDictCommController],
	providers: [SysDictConfigService, SysDictTypeService, SysDictDataService, SysDictLangService, SysDictSelTagService, SysLogLoginService, SysLogOperService],
	exports: [SysDictConfigService, SysLogLoginService, SysLogOperService],
})
export class SystemModule {
}
