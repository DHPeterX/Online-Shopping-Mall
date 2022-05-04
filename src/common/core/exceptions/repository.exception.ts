import { GlobalException } from './global.exception';

export class RepositoryException extends GlobalException{
	constructor(msgError?:string) {
		super(msgError);
	}
}
