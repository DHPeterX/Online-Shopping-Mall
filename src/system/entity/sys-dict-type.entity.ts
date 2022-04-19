import { IBaseEntity } from 'src/common/web/base/i-base.entity';
import { Entity } from 'typeorm';

@Entity('SYS_DICT_TYPE')
export class SysDictTypeEntity extends IBaseEntity {}
