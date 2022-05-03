import { IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator';

export class MemberDto {

}

export class MemberCreateDto {

	name?:string;

	genderCd?:string;

	@IsNotEmpty()
	email:string;

	@IsNotEmpty()
	phoneNo:string;
}

export class MemberBasicInfoDto {

}

export class MemberMasterInfoDto {

}

export class MemberUpdateDto {
	@IsNotEmpty()
	id:string;

	@IsOptional()
	genderCd?:string;

	@IsOptional()
	remark?:string;
}
