import { ControllerException } from '../../core/exceptions';

export class IBaseController extends ControllerException {

	throwMessage(msgServiceError?: string) : Promise<void> {
		throw new ControllerException(msgServiceError);
	}

}
