import { IsDate, IsString, IsOptional } from "class-validator";

export class CreatedProductDto {
   
    @IsString()
    prdId: string;

    @IsString()
    prdName: string;

    @IsString()
    @IsOptional()
    prdDesc: string;

    @IsString()
    @IsOptional()
    prdKndcd: string;

    @IsString()
    @IsOptional()
    parrentPrdUid: string;

    @IsString()
    @IsOptional()
    imgPath: string;

    @IsString()
    @IsOptional()
    stdPrcAmt: number;
    
}