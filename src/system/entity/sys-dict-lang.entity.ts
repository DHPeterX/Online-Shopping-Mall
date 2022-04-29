import { Column, Entity } from 'typeorm';
import { IBaseEntity } from '../../common/web/base';
import { SysComStatusConst } from '../../common/core/const';

@Entity('SYS_DICT_LANG')
export class SysDictLangEntity extends IBaseEntity {

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
