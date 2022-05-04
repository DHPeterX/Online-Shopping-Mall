import validator from 'validator';
import { UtilsException } from '../exceptions';
import { SysComStatusConst } from '../const';

export class CommonUtils {

	public static fmtToBoolean(inParam?: string): boolean {
		let tgtResult: boolean = false;
		let tgtValue: string = '';

		if (validator.isEmpty(inParam)) {
			throw new UtilsException('Utils Error', true);
		}

		tgtValue = validator.trim(inParam.toLowerCase());
		switch (tgtValue) {
			case 'true':
				tgtResult = true;
				break;
			case 't':
				tgtResult = true;
				break;
			case '1':
				tgtResult = true;
				break;
			case 'y':
				tgtResult = true;
				break;

			case 'false':
				tgtResult = false;
				break;
			case 'f':
				tgtResult = false;
				break;
			case '0':
				tgtResult = false;
				break;
			case 'n':
				tgtResult = false;
				break;
			default:
				tgtResult = false;
				break;
		}
		return tgtResult;
	}

	public static fmtToYesNo(inParam?: string): string {
		let tgtResult: string = SysComStatusConst.STS_NO;
		let tgtValue: string = '';

		if (validator.isEmpty(inParam)) {
			throw new UtilsException('Utils Error', true);
		}

		tgtValue = validator.trim(inParam.toLowerCase());
		switch (tgtValue) {
			case 'true':
				tgtResult = SysComStatusConst.STS_YES;
				break;
			case 't':
				tgtResult = SysComStatusConst.STS_YES;
				break;
			case '1':
				tgtResult = SysComStatusConst.STS_YES;
				break;
			case 'y':
				tgtResult = SysComStatusConst.STS_YES;
				break;

			case 'false':
				tgtResult = SysComStatusConst.STS_NO;
				break;
			case 'f':
				tgtResult = SysComStatusConst.STS_NO;
				break;
			case '0':
				tgtResult = SysComStatusConst.STS_NO;
				break;
			case 'n':
				tgtResult = SysComStatusConst.STS_NO;
				break;
			default:
				tgtResult = SysComStatusConst.STS_NO;
				break;
		}
		return tgtResult;
	}

	public static fmtToBooleanAsNum(inParam?: string): number {
		let tgtResult: number = 0;
		let tgtValue: string = '';

		if (validator.isEmpty(inParam)) {
			throw new UtilsException('Utils Error', true);
		}

		tgtValue = validator.trim(inParam.toLowerCase());
		switch (tgtValue) {
			case 'true':
				tgtResult = 1;
				break;
			case 't':
				tgtResult = 1;
				break;
			case '1':
				tgtResult = 1;
				break;
			case 'y':
				tgtResult = 1;
				break;

			case 'false':
				tgtResult = 0;
				break;
			case 'f':
				tgtResult = 0;
				break;
			case '0':
				tgtResult = 0;
				break;
			case 'n':
				tgtResult = 0;
				break;
			default:
				tgtResult = 0;
				break;
		}
		return tgtResult;
	}

}
