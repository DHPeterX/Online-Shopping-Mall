import { RepositoryException } from './repository.exception';

export class ServiceException extends RepositoryException{
	constructor(msgError?:string) {
		super(msgError);
	}
}
