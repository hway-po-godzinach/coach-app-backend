import { Module } from '@nestjs/common';
import { TrainingProgramController, WeekController, ExerciseController } from './controllers/';
import { TrainingProgramService, WeekService, ExerciseService } from './services/';
import { TrainingProgramRepository } from './training-program.repository';
import { PrismaModule } from '@app/common/prisma';

@Module({
	imports: [PrismaModule],
	controllers: [TrainingProgramController, WeekController, ExerciseController],
	providers: [TrainingProgramService, WeekService, ExerciseService, TrainingProgramRepository],
})
export class TrainingProgramModule {}
