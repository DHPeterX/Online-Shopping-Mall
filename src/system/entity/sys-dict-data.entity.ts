import { IBaseEntity } from 'src/common/web/base/i-base.entity';
import { Entity } from 'typeorm';

@Entity('SYS_DICT_DATA')
export class SysDictDataEntity extends IBaseEntity {}
