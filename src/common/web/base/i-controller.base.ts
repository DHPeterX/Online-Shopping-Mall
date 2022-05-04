import { ControllerException } from '../../core/exceptions';
import { HttpStatus } from '@nestjs/common';

export class IBaseController extends ControllerException {

	throwErrorMessage(msgServiceError?: string) : Promise<void> {
		throw new ControllerException(msgServiceError, HttpStatus.BAD_REQUEST);
	}

}
