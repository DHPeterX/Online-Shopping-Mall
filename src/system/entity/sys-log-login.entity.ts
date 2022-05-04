import { Column, Entity } from 'typeorm';
import { IBaseEntity } from '../../common/web/base';
import { SysComStatusConst } from '../../common/core/const';

@Entity('SYS_LOG_LOGIN')
export class SysLogLoginEntity extends IBaseEntity {

}
