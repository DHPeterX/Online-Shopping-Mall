import { HttpException, HttpStatus } from '@nestjs/common';

export class GlobalException extends HttpException {
	constructor(msgError?:string, status?: HttpStatus) {
		super(
			msgError,
			status
		);
	}
}
