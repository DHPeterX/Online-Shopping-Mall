import { string } from '@hapi/joi';
import { IBaseEntity } from 'src/common/web/base/i-base.entity';
import { Column, Entity } from 'typeorm';
import {STS_NO, STS_YES} from "../../common/core/const/sys-com-status.const";

@Entity('SYS_DICT_CONFIG')
export class SysDictConfigEntity extends IBaseEntity {
  @Column({ name: 'SYS_CONFIG_KEY', unique: true })
  sysConfigKey: string;

  @Column({ name: 'SYS_CONFIG_VAL' })
  sysConfigVal: string;

  @Column({ name: 'SYS_CONFIG_DESC' })
  sysConfigDesc: string;

  @Column({name: 'USE_YN', nullable: false, default: STS_NO})
  useYn: string;

  @Column({ name: 'CACHE_YN', nullable: false, default: STS_NO})
  cacheYn: string;
}
