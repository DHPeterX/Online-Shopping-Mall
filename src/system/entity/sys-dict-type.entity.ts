import { Column, Entity } from 'typeorm';
import { IBaseEntity } from '../../common/web/base';
import { SysComStatusConst } from '../../common/core/const';

@Entity('SYS_DICT_TYPE')
export class SysDictTypeEntity extends IBaseEntity {
    @Column({
        name: 'DICT_KEY',
        nullable: false,
    })
    dictKey: string;

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
