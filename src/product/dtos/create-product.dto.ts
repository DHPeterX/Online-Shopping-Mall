import { IsDate, IsString, IsOptional } from "class-validator";

export class CreatedProductDto {
   
    @IsString()
    PROD_UID: string;

    @IsString()
    PROD_NAME: string;

    @IsString()
    @IsOptional()
    PROD_DESC: string;

    @IsString()
    @IsOptional()
    PROD_KND_CD: string;

    @IsString()
    @IsOptional()
    PROD_TYP_CD : string;

    @IsString()
    @IsOptional()
    PARENT_PROD_UID: string;

    @IsString()
    @IsOptional()
    PROD_CLS_01: string;

    @IsString()
    @IsOptional()
    PROD_CLS_02: string;

    @IsString()
    @IsOptional()
    PROD_CLS_03: string;

    @IsString()
    @IsOptional()
    IMG_PATH: string;

    @IsString()
    @IsOptional()
    STD_PRC_AMT: number;

    @IsString()
    @IsOptional()
    SALE_PRC_AMT: number;

    @IsString()
    @IsOptional()
    OPTION: string;

    @IsString()
    @IsOptional()
    REG_K_ID: string;

    @IsDate()
    @IsOptional()
    REG_DT: Date;

    @IsString()
    @IsOptional()
    UPD_K_ID: string;

    @IsDate()
    @IsOptional()
    UPD_DT: Date;
}