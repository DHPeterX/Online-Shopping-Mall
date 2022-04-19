import { IBaseEntity } from '../../common/web/base/i-base.entity';
import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import { v5 as uuidv5 } from 'uuid';

@Entity('TB_CL_MBR')
export class Member extends IBaseEntity {

    @Column({ name: 'MBR_ID', unique: true })
    mbr_id: string;

    @Column({ name: 'ALIAS_NAME' })
    aliasName: string;

    @Column({ name: 'FIRST_NAME' })
    firstName: string;

    @Column({ name: 'LAST_NAME' })
    lastName: string;

    @Column({ name: 'GENDER_CD' })
    genderCd: string;

    @Column({ name: 'ACCOUNT_ID' })
    accountId: string;

    @Column({ name: 'MBR_GRD_CD' })
    mbrGradeCd: string;

    @Column({ name: 'MBR_TIR_CD' })
    mbrTierCd: string;

    @Column({ name: 'STATE_NAT_CD' })
    stateCntrctCd: string;

    @Column({ name: 'STATE_CITY_CD' })
    stateCityCd: string;

    @Column({ name: 'STATE_WARD_CD' })
    stateWardCd: string;

    @Column({ name: 'STATE_DETAIL' })
    stateDetail: string;

    @Column({ name: 'STATE_OTHER' })
    stateOther: string;

    @Column({ name: 'FIR_REG_SITE_CD' })
    firRegSiteCd: string;

    @Column({ name: 'FIR_LOGIN_DT' })
    firLoginDt: string;

    @Column({ name: 'LST_LOGIN_DT' })
    lstLoginDate: string;

    @Column({ name: 'LST_ACCESS_TOKEN' })
    lstAccessToken: string;

    @Column({ name: 'LST_ACCESS_EXP' })
    lstAccessTokenExp: string;
}
