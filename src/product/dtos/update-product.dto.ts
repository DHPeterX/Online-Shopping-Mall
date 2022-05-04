import { IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
	@IsString()
	@IsOptional()
	prdId: string;

	@IsString()
	@IsOptional()
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

	@IsString()
	@IsOptional()
	salePrcAmt: number;

}
