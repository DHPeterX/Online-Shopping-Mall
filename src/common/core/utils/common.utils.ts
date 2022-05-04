import validator  from 'validator'
import { UtilsException } from '../exceptions';

export class CommonUtils {

	public static fmtToBoolean(inParam?:string) : boolean {
		let tgtResult : boolean = false;
		let tgtValue 	:	string = "";



		if(validator.isEmpty(inParam)){
			throw new UtilsException("Utils Error", true);
		}

		tgtValue = validator.trim(inParam.toLowerCase());
		switch (tgtValue) {
			case "true": tgtResult = true; break;
			case "t": tgtResult = true; break;
			case "1": tgtResult = true; break;
			case "y": tgtResult = true; break;

			case "false": tgtResult = false; break;
			case "f": tgtResult = false; break;
			case "0": tgtResult = false; break;
			case "n": tgtResult = false; break;
			//default: tgtResult = undefined; break;
		}
		console.log("tgtResult-" + tgtResult);
		return tgtResult;
	}

}
