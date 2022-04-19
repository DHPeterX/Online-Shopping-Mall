import {IBaseEntity} from "../../common/web/base/i-base.entity";
import {Column, Entity} from "typeorm";

@Entity('TB_CL_MBR_GRADE')
export class MemberGradeEntity extends IBaseEntity{

    @Column({name:'GRD_CD', unique:true})
    gradeCd:string;

    @Column({name:'DESC', nullable: true })
    desc:string;

    @Column({name:'USE_YN', nullable: false, default: STS_NO })
    useYn:string;

    @Column({name:'CACHE_YN', nullable: false, default: STS_NO })
    cacheYn:string;

}
