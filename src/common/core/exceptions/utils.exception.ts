import { GlobalException } from './global.exception';
import { HttpStatus } from '@nestjs/common';

export class UtilsException extends GlobalException {
	constructor( msgError?:string, silentMode?:boolean) {
		const isSilentMode:boolean 	= (silentMode != null || silentMode != undefined ) ? silentMode : true;
		console.log("UtilsException ==>" + msgError);
		if(true == isSilentMode) {
			super(msgError,HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			super("", HttpStatus.BAD_REQUEST);
		}
	}
}
