import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
// @ts-ignore
import { plainToInstance } from 'class-transformer';

import { map } from 'rxjs/operators';

interface ClassConstructor {
	// eslint-disable-next-line @typescript-eslint/ban-types
	new(...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
	return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
	constructor(private dto: any) {
	}

	intercept(
		context: ExecutionContext,
		handler: CallHandler<any>,
	): Observable<any> {
		return handler.handle().pipe(
			map((data: any) => {
				return plainToInstance(this.dto, data, {
					excludeExtraneousValues: true, // exclude properties that don't have Exclude decorator
				});
			}),
		);
	}
}
