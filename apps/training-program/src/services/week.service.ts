import { Injectable } from '@nestjs/common';
import { TrainingProgramRepository } from '../training-program.repository';

@Injectable()
export class WeekService {
	constructor(private trainingProgramRepository: TrainingProgramRepository) {}

	add(programId: string) {
		return this.trainingProgramRepository.addWeek(programId);
	}

	duplicate(programId: string, weekId: string) {
		return this.trainingProgramRepository.duplicateWeek(programId, weekId);
	}

	remove(programId: string, weekId: string) {
		return this.trainingProgramRepository.removeWeek(programId, weekId);
	}
}
