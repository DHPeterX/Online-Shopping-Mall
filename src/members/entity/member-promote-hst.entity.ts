import { IBaseEntity } from '../../common/web/base/i-base.entity';
import { Column, Entity } from 'typeorm';
import internal from 'stream';

@Entity('TB_CL_MBR_PROMOTE_HST')
export class MemberPromoteHistoryEntity extends IBaseEntity {
  /*This table assosite with 2 table: Member Grade & Member Tier*/
  @Column({ name: 'MBR_UUID' })
  memberId: string;

  @Column({ name: 'PROMOTE_YM' })
  promoteMonth: string;

  @Column({ name: 'PROMOTE_SEQ_NO' })
  promoteSeqNo: number;

  @Column({ name: 'PROMOTE_RS_CD', nullable: false, default: '00' })
  promoteReasonCd: string;

  @Column({ name: 'CURR_GRD_CD', nullable: true, length: 2 })
  currGradeCd: string;

  @Column({ name: 'OCCR_GRD_CD', nullable: true, length: 2 })
  occrGradeCd: string;

  @Column({ name: 'CURR_TIR_CD', nullable: true, length: 2 })
  currGradeCd: string;

  @Column({ name: 'OCCR_TIR_CD', nullable: true, length: 2 })
  occrGradeCd: string;

  @Column({ name: 'ACTIVE_YN', nullable: false, default: STS_NO })
  activeYn: string;
}
