import { ArgumentsHost, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/core/interceptors/transform.interceptor';
import { HttpExceptionFilter } from './common/core/filter';

//console.log(process.env);

async function bootstrap() {
	const logger = new Logger();
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	app.setGlobalPrefix('api/v1');
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new TransformInterceptor());
	app.useGlobalFilters(new HttpExceptionFilter())
	const port = process.env.PORT;

	const config = new DocumentBuilder()
		.setTitle('Windey Open API')
		.setDescription('Windey Open API Desc - Test Nest JS')
		.setVersion('1.0')
		.addTag('windey')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api/v1/swagger-ui', app, document);

	await app.listen(port);

	logger.log(`*************************************`);
	logger.log(`* Application Starting on Port ${port} *`);
	logger.log(`*************************************`);
}

bootstrap().catch(console.error);
