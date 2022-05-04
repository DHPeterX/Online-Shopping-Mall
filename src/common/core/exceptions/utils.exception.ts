import { GlobalException } from './global.exception';
import { HttpStatus, UseInterceptors } from '@nestjs/common';
import { ExceptionInterceptor } from '../interceptors/exception.interceptor';

/** Exception Definition: <<AOP>>
 *  This class designed to USE ONLY
 *  for: Utils Class
 * */
export class UtilsException extends GlobalException {
	constructor( msgError?:string, silentMode?:boolean) {
		const isSilentMode:boolean 	= (silentMode != null || silentMode != undefined ) ? silentMode : true;
		console.log("UtilsException ==> " + msgError);
		if(true == isSilentMode) {
			super(msgError,HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			super("", HttpStatus.BAD_REQUEST);
		}
	}
}
