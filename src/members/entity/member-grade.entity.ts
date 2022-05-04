import { IBaseEntity } from '../../common/web/base/i-entity.base';
import { Column, Entity } from 'typeorm';
import { SysComStatusConst } from 'src/common/core/const/sys-com-status.const';

@Entity('TB_CL_MBR_GRADE')
export class MemberGradeEntity extends IBaseEntity {
	@Column({ name: 'GRD_CD', unique: true })
	gradeCd: string;

	@Column({ name: 'DESC', nullable: true })
	desc: string;

	@Column({
		name: 'USE_YN',
		nullable: false,
		default: 'N',
	})
	useYn: string;

	@Column({
		name: 'CACHE_YN',
		nullable: false,
		default: SysComStatusConst.STS_NO,
	})
	cacheYn: string;
}
