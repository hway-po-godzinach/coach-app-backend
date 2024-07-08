import { Injectable } from '@nestjs/common';
import { CreateTrainingProgramDto } from './dto/create-training-program.dto';
import { UpdateTrainingProgramDto } from './dto/update-training-program.dto';
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

	findAll() {
		return this.trainingProgramRepository.findAll();
	}

	findOne(id: string) {
		return this.trainingProgramRepository.findOne({ id });
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
}
