import { IBaseEntity } from 'src/common/web/base/i-base.entity';
import {Column, Entity} from 'typeorm';
import {SysComStatusConst} from "../../common/core/const/sys-com-status.const";
import {string} from "@hapi/joi";

@Entity('SYS_DICT_DATA')
export class SysDictDataEntity extends IBaseEntity {

    @Column({
        name: 'DICT_KEY',
        nullable: false,
    })
    dictKey: string;

    @Column({
        name: 'DICT_DEF_VAL',
        nullable: false,
    })
    dictDefVal: string;

    @Column({
        name: 'DICT_CUR_VAL',
        nullable: true,
    })
    dictCurVal: string;

    @Column({
        name: 'USE_YN',
        nullable: false,
        default: SysComStatusConst.STS_NO,
    })
    useYn: string;

    @Column({
        name: 'CACHE_YN',
        nullable: false,
        default: SysComStatusConst.STS_NO,
    })
    cacheYn: string;
}
