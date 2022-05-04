import { IsOptional, IsString } from 'class-validator';


export class CreateCityDto {

	@IsString()
	@IsOptional()
	state_city_cd: string;

	@IsString()
	@IsOptional()
	state_cntry_cd: string;

	@IsString()
	@IsOptional()
	state_city_nm: string;


}

export class CreateWardDto {

	@IsString()
	@IsOptional()
	state_ward_cd: string;

	@IsString()
	@IsOptional()
	state_city_cd: string;

	@IsString()
	@IsOptional()
	state_ward_nm: string;

}

export class CreateCountryDto {

	@IsString()
	@IsOptional()
	state_cntry_cd: string;

	@IsString()
	@IsOptional()
	state_cntry_nm: string;


}

