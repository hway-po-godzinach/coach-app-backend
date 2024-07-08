import { NestFactory } from '@nestjs/core';
import { TrainingProgramModule } from './training-program.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(TrainingProgramModule);
	app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
	await app.listen(4001);
}
bootstrap();
