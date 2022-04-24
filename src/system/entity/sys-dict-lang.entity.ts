import { IBaseEntity } from 'src/common/web/base/i-base.entity';
import { Column, Entity } from 'typeorm';
import { SysComStatusConst } from '../../common/core/const/sys-com-status.const';

@Entity('SYS_DICT_TYPE')
export class SysDictTypeEntity extends IBaseEntity {

  @Column({ name: 'LANG_CD' })
  langCd: string;

  @Column({ name: 'PROP_KEY' })
  propKey: string;

  @Column({ name: 'PROP_DESC' })
  propDesc: string;

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
