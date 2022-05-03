import { IsNotEmpty, IsOptional } from 'class-validator';

export class SysDictSelTagDto {

	@IsNotEmpty()
	dictTable: string;

	@IsNotEmpty()
	dictSelKey: string;

	@IsNotEmpty()
	dictSelLabel: string;

	@IsOptional()
	dictSelHint?: string;

	@IsOptional()
	filByCol01?: string;

	@IsOptional()
	filByCol02?: string;

	@IsOptional()
	filByCol03?: string;

	@IsOptional()
	orderBy?: string;

	@IsOptional()
	isAsc?: string;
}
