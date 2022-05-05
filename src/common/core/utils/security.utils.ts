import * as bcrypt from 'bcrypt';
import { UtilsException } from '../exceptions';
import { HttpException, HttpStatus } from '@nestjs/common';

export class SecurityUtils {

	public static isValidPwd(password: string): boolean {
		return true;
	}

	public static isPasswordMatched(curPwd:string, oldPwd:string){
		return true;
	}

	public static isValidToken(token: string): boolean {
		return true;
	}


	public static doEncryptPwd(password: string): string {
		return "";
	}

	public static doDecyptPwd(password: string): string  {
		return '';
	}

	public static getUserName(id: string): string  {
		return '';
	}

	public static getUserCompId(id: string): string  {
		return '';
	}

	public static getUserCompName(id: string): string  {
		return '';
	}

	public static getUserDeptId(id: string): string  {
		return '';
	}

	public static getUserDeptName(id: string): string  {
		return '';
	}

	public static getUserDeptCostId(id: string): string  {
		return '';
	}

	public static getUserPostCd(id: string): string  {
		return '';
	}

	public static getUserPostName(id: string): string  {
		return '';
	}

	public static isAdminUser(): boolean {
		// TODO: Get from TokenKey
		return true;
	}

	public static isNormalUser(): boolean {
		// TODO: Get from TokenKey
		return true;
	}

	public static genSalt(): string {
		return bcrypt.genSalt();
	}
}
