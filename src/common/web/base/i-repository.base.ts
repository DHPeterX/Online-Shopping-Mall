import { ControllerException, RepositoryException } from '../../core/exceptions';
import { HttpStatus } from '@nestjs/common';

export class IBaseRepository extends RepositoryException {

	constructor() {
		super();
	}

	throwErrorMessage(msgServiceError?: string) : Promise<void> {
		throw new RepositoryException(msgServiceError);
	}

}
