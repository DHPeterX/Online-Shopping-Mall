import { IBaseEntity } from '../../common/web/base/i-entity.base';
import { Column, Entity } from 'typeorm';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Entity('TB_CL_MBR')
export class MemberEntity extends IBaseEntity {

	@Column({ name: 'MBR_ID', unique: true })
	mbrId: string;

	@IsOptional()
	@Column({ name: 'ALIAS_NAME', nullable: true })
	aliasName: string;

	@IsOptional()
	@Column({ name: 'FIRST_NAME', nullable: true })
	firstName: string;

	@IsOptional()
	@Column({ name: 'LAST_NAME', nullable: true })
	lastName: string;

	@IsNotEmpty()
	@Column({ name: 'GENDER_CD', nullable: true })
	genderCd: string;

	@Column({ name: 'ACCOUNT_ID', nullable: true })
	accountId: string;

	@Column({ name: 'MBR_GRD_CD', nullable: false })
	mbrGradeCd: string;

	@Column({ name: 'MBR_TIR_CD', nullable: false  })
	mbrTierCd: string;

	@IsOptional()
	@Column({ name: 'STATE_NAT_CD', nullable: true })
	stateCntrctCd: string;

	@IsOptional()
	@Column({ name: 'STATE_CITY_CD', nullable: true  })
	stateCityCd: string;

	@IsOptional()
	@Column({ name: 'STATE_WARD_CD', nullable: true  })
	stateWardCd: string;

	@IsOptional()
	@Column({ name: 'STATE_DETAIL', nullable: true  })
	stateDetail: string;

	@IsOptional()
	@Column({ name: 'STATE_OTHER', nullable: true })
	stateOther: string;

	@IsOptional()
	@Column({ name: 'FIR_REG_SITE_CD', nullable: true })
	firRegSiteCd: string;

	@IsOptional()
	@Column({ name: 'FIR_LOGIN_DT', nullable: true })
	firLoginDt: string;

	@IsOptional()
	@Column({ name: 'LST_LOGIN_DT', nullable: true })
	lstLoginDt: string;

	@IsOptional()
	@Column({ name: 'LST_ACCESS_TOKEN', nullable: true })
	lstAccessToken: string;

	@IsOptional()
	@Column({ name: 'LST_ACCESS_EXP', nullable: true })
	lstAccessTokenExp: string;
}
