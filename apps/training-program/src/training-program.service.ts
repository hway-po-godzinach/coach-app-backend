import { Injectable } from '@nestjs/common';

@Injectable()
export class TrainingProgramService {
  getHello(): string {
    return 'Hello World!';
  }
}
