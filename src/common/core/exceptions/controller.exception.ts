import { GlobalException } from './global.exception';
import { HttpStatus, UseInterceptors } from '@nestjs/common';
import { ExceptionInterceptor } from '../interceptors/exception.interceptor';

/** Exception Definition: <<AOP>>
 *  This class designed to USE ONLY
 *  for: BaseController Or Controller
*/
export class ControllerException extends GlobalException{
	constructor(msgError?:string, codeError?: HttpStatus) {
		super(msgError,codeError);
	}
}
