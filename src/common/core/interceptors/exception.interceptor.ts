import { BadGatewayException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
//export class ExceptionInterceptor implements NestInterceptor {
export class ExceptionInterceptor{
intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		console.log('ExceptionInterceptor Context Info ==> ' + context.getClass().name + "." + context.getHandler().name + "()");

		//TODO: Implement Logic for Write Log Service

		return next
			.handle()
			.pipe(
				catchError(err => throwError(() => new BadGatewayException())),
			);
	}
}
