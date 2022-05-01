import { IsNull } from 'typeorm';
import { IsOptional } from 'class-validator';
import { SysDictDataEntity } from '../entity';

export class SysDictDataDto extends SysDictDataEntity{

}

export class SysDictDataCreateDto{}

export class SysDictDataUpdateDto{}

export class SysDictDataChangeStatusDto{
	@IsOptional()
	useYn?:string;
}

export class SysDictDataDispDto{
	@IsOptional()
	dispYn?:string;
}

export class SysDictDataDispOrderDto{
	@IsOptional()
	dispYn?:string;
	@IsOptional()
	dispOrder?:number;
}
