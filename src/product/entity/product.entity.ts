import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToMany } from 'typeorm';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    PROD_ID: string;

    @PrimaryColumn({ name: 'PROD_UID', default: () => 'gen_random_uuid()' })
    PROD_UID: string;

    @Column({nullable: true})
    PROD_NAME: string;

    @Column({nullable: true})
    PROD_DESC: string;

    @Column({nullable: true})
    PROD_KND_CD: string;

    // @ManyToMany()
    @Column({nullable: true})
    PROD_TYP_CD : string;

    // @OneToMany()
    @Column({nullable: true})
    PARENT_PROD_UID: string;

    @Column({nullable: true})
    PROD_CLS_01: string;

    @Column({nullable: true})
    PROD_CLS_02: string;

    @Column({nullable: true})
    PROD_CLS_03: string;

    @Column({nullable: true})
    IMG_PATH: string;

    @Column({nullable: true})
    STD_PRC_AMT: number;

    @Column({nullable: true})
    SALE_PRC_AMT: number;

    // @OneToMany()
    @Column({nullable: true})
    OPTION: string;

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