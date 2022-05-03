import { IsOptional } from 'class-validator';
import { SysDictTypeEntity } from '../entity';

export class SysDictTypeDto extends SysDictTypeEntity {
}

export class SysDictTypeCreateDto {
}

export class SysDictTypeUpdateDto {
}

export class SysDictTypeChangeStatusDto {
	@IsOptional()
	useYn?: string;
}

export class SysDictTypeDispDto {
	@IsOptional()
	dispYn?: string;
}

export class SysDictTypeDispOrdDto {
	@IsOptional()
	dispYn?: string;
	@IsOptional()
	dispOrder?: number;
}
