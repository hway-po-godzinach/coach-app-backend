import { Module } from '@nestjs/common';
import { TrainingProgramService } from './training-program.service';
import { TrainingProgramController } from './training-program.controller';
import { TrainingProgramRepository } from './training-program.repository';
import { PrismaModule } from '@app/common/prisma';

@Module({
	imports: [PrismaModule],
	controllers: [TrainingProgramController],
	providers: [TrainingProgramService, TrainingProgramRepository],
})
export class TrainingProgramModule {}
