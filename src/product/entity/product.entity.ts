import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToMany } from 'typeorm';
import { IBaseEntity } from 'src/common/web/base/i-base.entity';

@Entity('TB_SM_PRD')
export class Product extends IBaseEntity {

    @PrimaryGeneratedColumn({name: 'PRD_ID'})
    prdId: string;

    @PrimaryColumn({name: 'PRD_UID', default: () => 'gen_random_uuid()'})
    prdUid: string;

    //Product name
    @Column({name: 'PRD_NAME', nullable: true})
    prdName: string;

    //Product description
    @Column({name: 'PRD_DESC', nullable: true})
    prdDesc: string;

    //Product kind: combo or single
    @Column({name: 'PROD_KND_CD', nullable: true})
    prdKndcd: string;

    // Product combo ID
    @Column({name: 'PARENT_PROD_UID', nullable: true})
    parrentPrdUid: string;

    //Product image
    @Column({name: 'IMG_PATH', nullable: true})
    imgPath: string;

    //Product standard price
    @Column({name: 'STD_PRC_AMT', nullable: true})
    stdPrcAmt: number;

    // Product sale price
    @Column({name: 'SALE_PRC_AMT', nullable: true})
    salePrcAmt: number;

    @AfterInsert()
    logInsert() {
        console.log('Inserted Product with id', this.prdId);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated Product with id', this.prdId);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed Product with id', this.prdId);
    }
    
}