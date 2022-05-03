import * as bcrypt from 'bcrypt';

export class SecurityUtils {

	isValidPassword(password: string): Boolean {
		return true;
	}

	isValidToken(token: string): Boolean {
		return true;
	}

	doEncryptPassword(password: string): String {
		return '';
	}

	doDecyptPassword(password: string): String {
		return '';
	}

	getUserName(id: string): String {
		return '';
	}

	getUserCompId(id: string): String {
		return '';
	}

	getUserCompName(id: string): String {
		return '';
	}

	getUserDeptId(id: string): String {
		return '';
	}

	getUserDeptName(id: string): String {
		return '';
	}

	getUserDeptCostId(id: string): String {
		return '';
	}

	getUserPostCd(id: string): String {
		return '';
	}

	getUserPostName(id: string): String {
		return '';
	}

	isAdminUser(): Boolean {
		return true;
	}

	isNormalUser(): Boolean {
		return true;
	}

	genSalt(): Promise<string> {
		return bcrypt.genSalt();
	}
}
