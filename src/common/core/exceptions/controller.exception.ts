import { GlobalException } from './global.exception';

export class ControllerException extends GlobalException{
	constructor(msgError?:string) {
		super(msgError);
	}
}
