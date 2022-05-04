import { RepositoryException } from './repository.exception';
import { UseInterceptors } from '@nestjs/common';
import { ExceptionInterceptor } from '../interceptors/exception.interceptor';
import { GlobalException } from './global.exception';

/** Exception Definition: <<AOP>>
 *  This class designed to USE ONLY
 *  for: BaseService Or Service
 * */
export class ServiceException extends GlobalException{
	constructor(msgError?:string) {
		super(msgError);
	}
}
