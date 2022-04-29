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


@Module({
    imports: [TypeOrmModule.forFeature([SysDictConfigEntity, SysDictTypeEntity, SysDictDataEntity, SysDictLangEntity, SysDictSelTagEntity])],
    controllers:[SysDictCommController, SysDictConfigController, SysDictTypeController, SysDictDataController, SysDictLangController ],
    providers:[]
})
export class SystemModule {}
