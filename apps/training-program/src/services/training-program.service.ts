import { Injectable } from '@nestjs/common';
import { CreateTrainingProgramDto, UpdateTrainingProgramDto, DuplicateTrainingProgramDto } from '../dto/';
import { TrainingProgramRepository } from '../training-program.repository';

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
		return this.trainingProgramRepository.findAll(include);
	}

	findOne(id: string) {
		return this.trainingProgramRepository.findOne({ id }, include);
	}

	update(id: string, updateTrainingProgramDto: UpdateTrainingProgramDto) {
		const { name, description } = updateTrainingProgramDto;

		const updateProgram = {
			name,
			description,
		};

		return this.trainingProgramRepository.update({ id }, updateProgram, include);
	}

	remove(id: string) {
		return this.trainingProgramRepository.remove({ id });
	}
}
