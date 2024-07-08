import { Module } from '@nestjs/common';
import { TrainingProgramController } from './training-program.controller';
import { TrainingProgramService } from './training-program.service';

@Module({
  imports: [],
  controllers: [TrainingProgramController],
  providers: [TrainingProgramService],
})
export class TrainingProgramModule {}
