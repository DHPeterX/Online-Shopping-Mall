import { GlobalException } from './global.exception';

export class BusinessException extends GlobalException{
	constructor(msgError:string) {
		super(msgError);
	}
}
