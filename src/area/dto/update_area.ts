import { IsDate, IsString, IsOptional } from "class-validator";


export class UpdateCityDto {

   @IsString()
   @IsOptional()
   state_cntry_cd: string;

   @IsString()
   @IsOptional()
   state_city_nm: string;
  

}

export class  UpdateWardDto {

   @IsString()
   @IsOptional()
   state_city_cd: string;
 
   @IsString()
   @IsOptional()
   state_ward_nm: string;
   
}

export class  UpdateCountryDto {

   @IsString()
   @IsOptional()
   state_cntry_nm: string;
  
  
}

