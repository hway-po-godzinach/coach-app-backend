import { NestFactory } from '@nestjs/core';
import { TrainingProgramModule } from './training-program.module';

async function bootstrap() {
  const app = await NestFactory.create(TrainingProgramModule);
  await app.listen(3000);
}
bootstrap();
