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
	SysDictTypeRepository,
} from './repository';
import { SysHealthController } from './controller/sys-health.controller';

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
		TypeOrmModule.forFeature([SysDictConfigRepository, SysDictTypeRepository, SysDictDataRepository, SysDictLangRepository, SysDictSelTagRepository]),
	],
	controllers: [SysHealthController, SysDictConfigController, SysDictTypeController, SysDictDataController, SysDictLangController, SysDictSelTagController ,SysDictCommController],
	providers: [SysDictConfigService, SysDictTypeService, SysDictDataService, SysDictLangService, SysDictSelTagService],
	exports: [],
})
export class SystemModule {
}
