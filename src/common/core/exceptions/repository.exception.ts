import { GlobalException } from './global.exception';
import { UseInterceptors } from '@nestjs/common';
import { ExceptionInterceptor } from '../interceptors/exception.interceptor';

/** Exception Definition: <<AOP>>
 *  This class designed to USE ONLY
 *  for: BaseRepository Or Repository
 * */
export class RepositoryException extends GlobalException{
	constructor(msgError?:string) {
		super(msgError);
	}
}
