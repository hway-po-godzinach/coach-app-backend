import { Controller, Get } from '@nestjs/common';
import { TrainingProgramService } from './training-program.service';

@Controller()
export class TrainingProgramController {
  constructor(private readonly trainingProgramService: TrainingProgramService) {}

  @Get()
  getHello(): string {
    return this.trainingProgramService.getHello();
  }
}
