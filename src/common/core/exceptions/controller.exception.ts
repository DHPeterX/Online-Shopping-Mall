import { GlobalException } from './global.exception';
import { HttpStatus } from '@nestjs/common';

export class ControllerException extends GlobalException{
	constructor(msgError?:string, codeError?: HttpStatus) {
		super(msgError,codeError);
	}
}
