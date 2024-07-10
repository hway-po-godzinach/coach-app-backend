import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TrainingProgramService } from '../services/training-program.service';
import { CreateTrainingProgramDto, UpdateTrainingProgramDto, DuplicateTrainingProgramDto } from '../dto';

@Controller('program')
export class TrainingProgramController {
	constructor(private readonly trainingProgramService: TrainingProgramService) {}

	@Post()
	create(@Body() createTrainingProgramDto: CreateTrainingProgramDto) {
		return this.trainingProgramService.create(createTrainingProgramDto);
	}

	@Post(':programId/duplicate')
	duplicate(@Param('programId') programId: string, @Body() duplicateTrainingProgramDto: DuplicateTrainingProgramDto) {
		return this.trainingProgramService.duplicate(programId, duplicateTrainingProgramDto);
	}

	@Get()
	findAll() {
		return this.trainingProgramService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.trainingProgramService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTrainingProgramDto: UpdateTrainingProgramDto) {
		return this.trainingProgramService.update(id, updateTrainingProgramDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.trainingProgramService.remove(id);
	}
}
