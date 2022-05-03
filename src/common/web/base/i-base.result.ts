import { HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

export class IResult {

	serviceMsgCode: string;

	serviceMsg: string;

	errorMsgCode: string;

	errorMsg: string;

	status: HttpStatus;

	data: Observable<any>;

	success(): Promise<IResult> {
		return;
	}

}
