import { AfterRemove ,AfterInsert, Column, Entity, PrimaryGeneratedColumn, AfterUpdate, PrimaryColumn } from 'typeorm';
import { IBaseEntity } from '../../common/web/base/i-base.entity';

@Entity()
export class Delivery extends IBaseEntity{
  @PrimaryGeneratedColumn()
  dlr_uid: string;

  @Column({nullable: true}) 
  dlr_sts_cd: string;

  @Column({nullable: true})
  receiver: string;

  @Column({nullable: true})
  state_cntry_cd: string;
  
  @Column({nullable: true}) 
  state_city_cd: string;

  @Column({nullable: true})
  state_ward_cd: string;

  @Column({nullable: true})
  state_addr_01: string;
  
  @Column({nullable: true})
  state_addr_02: string;

  @Column({nullable: true}) 
  tracking_no: string;

  @Column({nullable: true})
  booking_order_no: string;

  @Column({nullable: true})
  ord_no: number;


  
  constructor(partial: Partial<Delivery>) {
    super()
    Object.assign(this, partial)
  }


  @AfterInsert()
  loginsert()
  {
    console.log('inserted with DLR ID' ,this.dlr_uid);
  }


  @AfterUpdate()
  logupdate()
  {
    console.log('updated with DLR ID' ,this.dlr_uid);
  }


  @AfterRemove()
  logremove()
  {
    console.log('removed with DLR ID' ,this.dlr_uid);
  }
}