import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToMany } from 'typeorm';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    PROD_ID: string;

    @PrimaryColumn({ name: 'PROD_UID', default: () => 'gen_random_uuid()' })
    PROD_UID: string;

    //Product name
    @Column({nullable: true})
    PROD_NAME: string;

    //Product description
    @Column({nullable: true})
    PROD_DESC: string;

    //Product kind: combo or single
    @Column({nullable: true})
    PROD_KND_CD: string;

    // Product combo ID
    @Column({nullable: true})
    PARENT_PROD_UID: string;

    //Product image
    @Column({nullable: true})
    IMG_PATH: string;

    //Product standard price
    @Column({nullable: true})
    STD_PRC_AMT: number;

    // Product sale price
    @Column({nullable: true})
    SALE_PRC_AMT: number;

    @Column({nullable: true})
    REG_K_ID: string;

    @Column({nullable: true})
    REG_DT: Date;

    @Column({nullable: true})
    UPD_K_ID: string;

    @Column({nullable: true})
    UPD_DT: Date;

    @AfterInsert()
    logInsert() {
        console.log('Inserted Product with id', this.PROD_ID);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated Product with id', this.PROD_ID);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed Product with id', this.PROD_ID);
    }
    
}