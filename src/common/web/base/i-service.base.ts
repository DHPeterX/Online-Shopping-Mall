import { RepositoryException, ServiceException } from '../../core/exceptions';
import { SysDictConfigEntity } from '../../../system/entity';

export class IBaseService extends ServiceException {

	constructor() {
		super();
	}

	throwErrorMessage(msgServiceError?: string) : Promise<void> {
		throw new ServiceException(msgServiceError);
	}

}
