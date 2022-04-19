import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  IsNull,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class IBaseEntity {
  @PrimaryColumn({ name: 'ID', default: () => 'gen_random_uuid()' })
  id: string;

  @IsOptional()
  @Column({ name: 'NAME', nullable: true, comment: 'Name' })
  name: string;

  // @ts-ignore
  @Column({ name: 'REMARK', nullable: true, comment: 'Remark' })
  remark: string;

  @Exclude()
  @Column({ name: 'REMARK_IT', nullable: true, comment: 'Remark (IT)' })
  remarkIt: string;

  @Exclude()
  @Column({
    name: 'DEL_FLAG',
    default: STS_NO,
    nullable: false,
    comment: 'Del Flag',
  })
  @Exclude()
  @Column({
    name: 'SYSDATE',
    type: 'timestamp',
    nullable: false,
    comment: 'DB SystemTime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  sysdate: Date;

  @Column({
    name: 'CREATED_AT',
    type: 'date',
    nullable: true,
    comment: 'Created At',
  })
  createdAt: string;

  @Column({
    length: 64,
    name: 'CREATED_BY',
    nullable: true,
    comment: 'Created By',
  })
  createdBy: string;

  @Column({
    length: 255,
    name: 'CREATED_NAME',
    nullable: true,
    comment: 'Created Name',
  })
  createdName: string;

  @Column({
    name: 'UPDATED_AT',
    type: 'date',
    nullable: true,
    comment: 'Updated At',
  })
  updatedAt: string;

  @Column({
    length: 64,
    name: 'UPDATED_BY',
    nullable: true,
    comment: 'Updated By',
  })
  updatedBy: string;

  @Column({
    length: 255,
    name: 'UPDATED_NAME',
    nullable: true,
    comment: 'Updated Name',
  })
  updatedName: string;

  // @BeforeInsert()
  // logInsert() {
  //   //console.log(`Inserted Object with ID ${this.id}`);
  // }
  //
  // @BeforeUpdate()
  // logUpdate() {
  //   console.log(`Updated Object with ID ${this.id}`);
  // }
  //
  // @BeforeRemove()()
  // logRemove() {
  //   console.log(`Removed Object with ID ${this.id}`);
  // }

  // @AfterInsert()
  // logInsert() {
  //   console.log(`Inserted Object with ID ${this.id}`);
  // }

  // @AfterUpdate()
  // logUpdate() {
  //   console.log(`Updated Object with ID ${this.id}`);
  // }

  // @AfterRemove()
  // logRemove() {
  //   console.log(`Removed Object with ID ${this.id}`);
  // }
}
