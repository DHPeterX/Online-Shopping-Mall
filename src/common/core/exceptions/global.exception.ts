import { HttpException, HttpStatus } from '@nestjs/common';

export class GlobalException extends HttpException {
	constructor(msgError?:string, status?: HttpStatus) {
		console.log(msgError);
		super(
			!(msgError == "" || msgError == null || msgError == undefined) ? msgError :  "Bad Request",
			(status == HttpStatus.OK) ? HttpStatus.OK : HttpStatus.BAD_REQUEST
		);
	}
}
