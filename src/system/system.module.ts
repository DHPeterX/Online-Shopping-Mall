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

@Module({
    imports: [
      //TypeOrmModule.forFeature([SysDictConfigEntity, SysDictTypeEntity, SysDictDataEntity, SysDictLangEntity, SysDictSelTagEntity, SysDictConfigRepository])
        TypeOrmModule.forFeature([SysDictConfigRepository, SysDictTypeRepository, SysDictDataRepository, SysDictLangRepository, SysDictSelTagRepository])
    ],
    controllers:[SysDictConfigController, SysDictTypeController, SysDictDataController, SysDictLangController ],
    providers:[ SysDictConfigService, SysDictTypeService, SysDictDataService, SysDictLangService, SysDictSelTagService],
    exports:[],
})
export class SystemModule {}
