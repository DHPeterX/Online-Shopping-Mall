import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {
    SysDictConfigEntity,
    SysDictDataEntity,
    SysDictLangEntity,
    SysDictSelTagEntity,
    SysDictTypeEntity,
} from './entity';
import {
    SysDictCommController,
    SysDictConfigController,
    SysDictDataController,
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
    SysDictLangRepository, SysDictSelTagRepository,
    SysDictTypeRepository,
} from './repository';

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
        TypeOrmModule.forFeature([SysDictConfigRepository, SysDictTypeRepository, SysDictDataRepository, SysDictLangRepository, SysDictSelTagRepository])
    ],
    controllers:[SysDictConfigController, SysDictTypeController, SysDictDataController, SysDictLangController ],
    providers:[ SysDictConfigService, SysDictTypeService, SysDictDataService, SysDictLangService, SysDictSelTagService],
    exports:[],
})
export class SystemModule {}
