import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SysDictCommController} from "./controller/sys-dict-comm.controller";
import {SysDictConfigController} from "./controller/sys-dict-config.controller";
import {SysDictDataController} from "./controller/sys-dict-data.controller";
import {SysDictTypeController} from "./controller/sys-dict-type.controller";
import {SysDictLangController} from "./controller/sys-dict-lang.controller";

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers:[SysDictCommController, SysDictConfigController, SysDictTypeController, SysDictDataController, SysDictLangController ],
    providers:[]
})
export class SystemModule {}
