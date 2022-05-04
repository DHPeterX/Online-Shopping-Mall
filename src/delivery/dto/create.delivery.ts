import { IsOptional, IsString } from 'class-validator';


export class CreateDeliveryDto {

	@IsString()
	@IsOptional()
	dlr_sts_cd: string;

	@IsString()
	@IsOptional()
	receiver: string;

	@IsString()
	@IsOptional()
	state_cntry_cd: string;

	@IsString()
	@IsOptional()
	state_cdity_cd: string;

	@IsString()
	@IsOptional()
	state_ward_cd: string;

	@IsString()
	@IsOptional()
	state_addr_01: string;

	@IsString()
	@IsOptional()
	state_addr_02: string;

	@IsString()
	@IsOptional()
	tracking_no: string;

	@IsString()
	@IsOptional()
	booking_order_no: string;

	@IsString()
	@IsOptional()
	order_no: string;


}

