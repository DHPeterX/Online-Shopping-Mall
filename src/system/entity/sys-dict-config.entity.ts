import { Column, Entity } from 'typeorm';
import { IBaseEntity } from '../../common/web/base';
import { SysComStatusConst } from '../../common/core/const';

@Entity('SYS_DICT_CONFIG')
export class SysDictConfigEntity extends IBaseEntity {

  @Column({ name: 'SYS_CONFIG_KEY', unique: true })
  sysConfigKey: string;

  @Column({ name: 'SYS_CONFIG_VAL' })
  sysConfigVal: string;

  @Column({ name: 'SYS_CONFIG_DESC' })
  sysConfigDesc: string;

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
