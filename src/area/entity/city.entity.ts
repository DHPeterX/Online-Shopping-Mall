import { AfterRemove ,AfterInsert, Column, Entity, PrimaryGeneratedColumn, AfterUpdate } from 'typeorm';
import { IBaseEntity } from '../../common/web/base/i-base.entity';


@Entity()
export class City extends IBaseEntity{
  @PrimaryGeneratedColumn()
  state_city_cd: string;

  @Column()
  state_cntry_cd: string;

  @Column()
  state_city_nm: string;
  
  
  
  
  constructor(partial: Partial<City>) {
    super()
    Object.assign(this, partial)
  }


  @AfterInsert()
  loginsert()
  {
    console.log('inserted with ID' ,this.state_city_cd);
  }


  @AfterUpdate()
  logupdate()
  {
    console.log('updated with ID' ,this.state_city_cd);
  }


  @AfterRemove()
  logremove()
  {
    console.log('removed with ID' ,this.state_city_cd);
  }
}