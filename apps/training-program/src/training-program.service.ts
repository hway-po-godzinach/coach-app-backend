import { Injectable } from '@nestjs/common';
import { CreateTrainingProgramDto, UpdateTrainingProgramDto, DuplicateTrainingProgramDto } from './dto/';
import { TrainingProgramRepository } from './training-program.repository';

@Injectable()
export class TrainingProgramService {
	constructor(private trainingProgramRepository: TrainingProgramRepository) {}

	create(createTrainingProgramDto: CreateTrainingProgramDto) {
		const { name, description } = createTrainingProgramDto;

		const program = {
			name,
			description,
		};

		return this.trainingProgramRepository.create(program);
	}

	duplicate(programId: string, duplicateTrainingProgramDto: DuplicateTrainingProgramDto) {
		const { name: duplicatedProgramName } = duplicateTrainingProgramDto;

		return this.trainingProgramRepository.duplicate(programId, duplicatedProgramName);
	}

	findAll() {
		return this.trainingProgramRepository.findAll();
	}

	findOne(id: string) {
		const include = {
			weeks: {
				include: {
					days: {
						include: {
							exercises: true,
						},
					},
				},
			},
		};

		return this.trainingProgramRepository.findOne({ id }, include);
	}

	update(id: string, updateTrainingProgramDto: UpdateTrainingProgramDto) {
		const { name, description } = updateTrainingProgramDto;

		const updateProgram = {
			name,
			description,
		};

		return this.trainingProgramRepository.update({ id }, updateProgram);
	}

	remove(id: string) {
		return this.trainingProgramRepository.remove({ id });
	}

	addWeek(programId: string) {
		return this.trainingProgramRepository.addWeek(programId);
	}

	removeWeek(programId: string, weekId: string) {
		return this.trainingProgramRepository.removeWeek(programId, weekId);
	}
}
