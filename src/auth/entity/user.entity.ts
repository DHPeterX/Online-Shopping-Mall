import {
  Column,
  Entity,
  Generated,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IBaseEntity } from 'src/common/web/base/i-base.entity';

@Entity('SYS_USER')
export class User extends IBaseEntity {
  @PrimaryColumn({ unique: true, name: 'USER_NAME', nullable: false })
  username: string;

  @Column({ unique: true, name: 'EMAIL', nullable: true })
  email: string;

  @Column({ name: 'CELL_PHONE', nullable: true })
  cellPhone: string;

  @Column({ name: 'PASS_WORD', nullable: true })
  password: string;

  @Column({ name: 'IS_EMAIL_VALID', default: '0', nullable: false })
  isEmalValid: string;

  @Column({ name: 'IS_CELLPHONE_VALID', default: '0', nullable: false })
  isCellPhoneValid: string;

  @Column({ name: 'USER_STS_CD', default: '00', nullable: false })
  userStsCd: string; // Enable & Disable
}
