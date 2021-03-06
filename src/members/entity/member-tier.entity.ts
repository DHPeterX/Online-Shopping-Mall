import { IBaseEntity } from '../../common/web/base/i-entity.base';
import { Column, Entity } from 'typeorm';

@Entity('TB_CL_MBR_TIER')
export class MemberTierEntity extends IBaseEntity {
	@Column({ name: 'TIR_CD', unique: true })
	gradeCd: string;

	@Column({ name: 'DESC', nullable: true })
	desc: string;

	@Column({ name: 'USE_YN', nullable: false, default: 'N' })
	useYn: string;

	@Column({ name: 'CACHE_YN', nullable: false, default: 'N' })
	cacheYn: string;
}
