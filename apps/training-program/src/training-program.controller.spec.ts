import { Test, TestingModule } from '@nestjs/testing';
import { TrainingProgramController } from './training-program.controller';
import { TrainingProgramService } from './training-program.service';

describe('TrainingProgramController', () => {
  let trainingProgramController: TrainingProgramController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TrainingProgramController],
      providers: [TrainingProgramService],
    }).compile();

    trainingProgramController = app.get<TrainingProgramController>(TrainingProgramController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(trainingProgramController.getHello()).toBe('Hello World!');
    });
  });
});
