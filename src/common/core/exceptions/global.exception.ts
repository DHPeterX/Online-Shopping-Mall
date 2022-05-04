import { HttpException, HttpStatus } from '@nestjs/common';

export class GlobalException extends HttpException {
	constructor(msgError?:string) {
		console.log(msgError);
		super(!(msgError == "" || msgError == null || msgError == undefined) ? msgError :  "Bad Request", HttpStatus.BAD_REQUEST);
	}
}
