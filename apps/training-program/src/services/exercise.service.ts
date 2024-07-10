import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from '../dto';
import { TrainingProgramRepository } from '../training-program.repository';

@Injectable()
export class ExerciseService {
	constructor(private trainingProgramRepository: TrainingProgramRepository) {}

	findAll() {
		return this.trainingProgramRepository.findAllExercises();
	}

	findOne(id: string) {
		return this.trainingProgramRepository.findOneExercise(id);
	}

	create(createExerciseDto: CreateExerciseDto) {
		const { name, description } = createExerciseDto;

		return this.trainingProgramRepository.createExercise(name, description);
	}

	remove(id: string) {
		return this.trainingProgramRepository.removeExercise(id);
	}
}
