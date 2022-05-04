import * as bcrypt from 'bcrypt';

export class SecurityUtils {

	async isValidPassword(password: string): Promise<boolean> {
		return true;
	}

	async isValidToken(token: string): Promise<boolean>  {
		return true;
	}

	async doEncryptPassword(password: string): Promise<String> {
		return "";
	}

	async doDecyptPassword(password: string): Promise<string>  {
		return '';
	}

	async getUserName(id: string): Promise<string>  {
		return '';
	}

	async getUserCompId(id: string): Promise<string>  {
		return '';
	}

	async getUserCompName(id: string): Promise<string>  {
		return '';
	}

	async getUserDeptId(id: string): Promise<string>  {
		return '';
	}

	async getUserDeptName(id: string): Promise<string>  {
		return '';
	}

	async getUserDeptCostId(id: string): Promise<string>  {
		return '';
	}

	async getUserPostCd(id: string): Promise<string>  {
		return '';
	}

	async getUserPostName(id: string): Promise<string>  {
		return '';
	}

	async isAdminUser(): Promise<boolean> {
		return true;
	}

	async isNormalUser(): Promise<boolean> {
		return true;
	}

	async genSalt(): Promise<string> {
		return await bcrypt.genSalt();
	}
}
