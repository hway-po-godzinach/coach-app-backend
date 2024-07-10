import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ExerciseService } from '../services';
import { CreateExerciseDto } from '../dto';

@Controller('exercise')
export class ExerciseController {
	constructor(private readonly exerciseService: ExerciseService) {}

	@Get()
	findAll() {
		return this.exerciseService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.exerciseService.findOne(id);
	}

	@Post()
	create(@Body() createExerciseDto: CreateExerciseDto) {
		return this.exerciseService.create(createExerciseDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.exerciseService.remove(id);
	}
}
