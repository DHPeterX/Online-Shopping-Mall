import { Column, Entity } from 'typeorm';
import { IBaseEntity } from '../../common/web/base';
import { SysComStatusConst } from '../../common/core/const';

@Entity('SYS_DICT_SEL_TAG')
export class SysDictSelTagEntity extends IBaseEntity {

	@Column({ name: 'SYS_DB_SCHEMA' })
	sysSchema: string;

	@Column({ name: 'SYS_DB_TABLE' })
	sysTableName: string;

	@Column({ name: 'SYS_COL_VAL' })
	sysTableColKey: string;

	@Column({ name: 'SYS_COL_NAME' })
	sysTableColVal: string;

	@Column({ name: 'SYS_COL_DESC' })
	sysTableDesc: string;

	@Column({ name: 'FILTR_COL_01' })
	filterCol01: string;

	@Column({ name: 'FILTR_COL_02' })
	filterCol02: string;

	@Column({ name: 'FILTR_COL_03' })
	filterCol03: string;

	@Column({ name: 'ORDER_COL' })
	orderByCols: string;

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
