import { Column, Entity } from 'typeorm';
import { IBaseEntity } from '../../common/web/base';
import { SysComStatusConst } from '../../common/core/const';

@Entity('SYS_LOG_OPER')
export class SysLogOperEntity extends IBaseEntity {

}
