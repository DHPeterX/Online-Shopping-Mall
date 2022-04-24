import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SysDictCommController} from "./controller/sys-dict-comm.controller";
import {SysDictConfigController} from "./controller/sys-dict-config.controller";
import {SysDictDataController} from "./controller/sys-dict-data.controller";
import {SysDictTypeController} from "./controller/sys-dict-type.controller";
import {SysDictLangController} from "./controller/sys-dict-lang.controller";
import {SysDictConfigEntity} from "./entity/sys-dict-config.entity";
import {SysDictTypeEntity} from "./entity/sys-dict-lang.entity";
import {SysDictDataEntity} from "./entity/sys-dict-data.entity";
import {SysDictSelTagEntity} from "./entity/sys-dict-sel-tag.entity";

@Module({
    imports: [TypeOrmModule.forFeature([SysDictConfigEntity, SysDictTypeEntity, SysDictDataEntity, SysDictSelTagEntity])],
    controllers:[SysDictCommController, SysDictConfigController, SysDictTypeController, SysDictDataController, SysDictLangController ],
    providers:[]
})
export class SystemModule {}
