import { Controller, Param, Post, Delete } from '@nestjs/common';
import { WeekService } from '../services';

@Controller('program/:programId/weeks')
export class WeekController {
	constructor(private readonly weekService: WeekService) {}

	@Post()
	add(@Param('programId') programId: string) {
		return this.weekService.add(programId);
	}

	@Post(':programId/weeks/:weekId/duplicate')
	duplicate(@Param('programId') programId: string, @Param('weekId') weekId: string) {
		this.weekService.duplicate(programId, weekId);
	}

	@Delete('/:weekId')
	remove(@Param('programId') programId: string, @Param('weekId') weekId: string) {
		return this.weekService.remove(programId, weekId);
	}
}
