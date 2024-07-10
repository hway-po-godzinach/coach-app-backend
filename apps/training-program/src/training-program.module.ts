import { Module } from '@nestjs/common';
import { TrainingProgramService, WeekService } from './services/';
import { TrainingProgramController } from './controllers/training-program.controller';
import { TrainingProgramRepository } from './training-program.repository';
import { PrismaModule } from '@app/common/prisma';

@Module({
	imports: [PrismaModule],
	controllers: [TrainingProgramController],
	providers: [TrainingProgramService, WeekService, TrainingProgramRepository],
})
export class TrainingProgramModule {}
