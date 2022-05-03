import { IsNotEmpty, IsOptional } from 'class-validator';
import { SysDictConfigEntity } from '../entity';

export class SysDictConfigDto extends SysDictConfigEntity {

}

export class SysDictConfigCreateDto{}

export class SysDictConfigUpdateDto{}

export class SysDictConfigDeleteDto{}

export class SysDictConfigChangeStatusDto{

	@IsOptional()
	useYn?:string;

}

export class SysDictConfigDispDto{

	@IsNotEmpty()
	dispYn?:string;

}

export class SysDictConfigDispOrderDto{

	@IsOptional()
	dispYn?:string;

	@IsNotEmpty()
	dispOrder:number;
}
