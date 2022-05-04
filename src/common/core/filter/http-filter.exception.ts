import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import {
	BusinessException,
	ControllerException,
	GlobalException,
	RepositoryException,
	ServiceException,
} from '../exceptions';

@Catch()
export class HttpFilterException implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost) {
		const context = host.switchToHttp();
		const response = context.getResponse<Response>();
		const request = context.getRequest<Request>();

		let status:HttpStatus;
		let statusMsg:string = "Bad Request";

		if(exception instanceof ControllerException) {
			console.log("Exception Group A");
			console.log(exception.name + "===> " + exception.message);
			status = HttpStatus.BAD_REQUEST;

		} else if(exception instanceof (ServiceException || RepositoryException || BusinessException)) {
			console.log("Exception Group B");
			status = HttpStatus.BAD_REQUEST;

		} else if(exception instanceof (NotFoundException)) {
			console.log("Exception Group C");
			status = HttpStatus.NO_CONTENT;
			statusMsg = "Data No Found";
		} else if(exception instanceof (HttpException || GlobalException)) {
			console.log("Exception Group D");
			status = HttpStatus.BAD_REQUEST;
		} else {
			console.log("Exception Group E");
			status = HttpStatus.INTERNAL_SERVER_ERROR;
			statusMsg = "Internal Service Error";
		}

		response
			.status(status)
			.json({
				statusCode: status,
				statusMessage: statusMsg,
				timestamp: new Date().toISOString(),
				errorPath: request.url,
			});
	}
}
