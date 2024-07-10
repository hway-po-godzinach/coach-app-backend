import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { PrismaService } from '@app/common/prisma/prisma.service';
import { TrainingProgram } from './entities/training-program.entity';

@Injectable()
export class TrainingProgramRepository extends AbstractRepository<TrainingProgram> {
	constructor(protected readonly prisma: PrismaService) {
		super(prisma);
	}

	protected get model() {
		return this.prisma?.program;
	}

	protected get repositoryName() {
		return 'Training program';
	}

	//PROGRAMS
	async duplicate(programId: string, duplicatedProgramName: string) {
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

		const program = await this.findOneOrFail({ id: programId }, include);

		if (!program) {
			return;
		}

		const newProgram = await this.prisma.program.create({
			data: {
				name: duplicatedProgramName,
				description: program.description,
				weeks: {
					create: program.weeks?.map(week => {
						return {
							order: week.order,
							days: {
								create: week.days?.map(day => {
									return {
										type: day.type,
										exercises: {
											//TODO: Add exercises
										},
									};
								}),
							},
						};
					}),
				},
			},
			include: {
				weeks: {
					include: {
						days: {
							include: {
								exercises: true,
							},
						},
					},
				},
			},
		});

		return newProgram;
	}

	//WEEKS
	async addWeek(programId: string) {
		const program = await this.findOneOrFail({ id: programId });

		if (!program) {
			return;
		}

		const newWeek = await this.prisma.week.create({
			data: {
				programId: programId,
				days: {},
				order: program.weeks.length + 1,
			},
			include: {
				days: {
					include: {
						exercises: true,
					},
				},
			},
		});

		return newWeek;
	}

	async duplicateWeek(programId: string, weekId: string) {
		const program = await this.findOneOrFail({ id: programId });

		if (!program) {
			return;
		}

		const week = await this.prisma.week.findUnique({
			where: {
				id: weekId,
			},
			include: {
				days: {
					include: {
						exercises: true,
					},
				},
			},
		});

		if (!week) {
			this.throwNotFoundException({ id: weekId });
		}

		const newWeek = await this.prisma.week.create({
			data: {
				programId: programId,
				days: {
					create: week.days.map(day => {
						return {
							type: day.type,
							exercises: {
								//TODO: Add exercises
							},
						};
					}),
				},
				order: program.weeks.length + 1,
			},
			include: {
				days: {
					include: {
						exercises: true,
					},
				},
			},
		});

		return newWeek;
	}

	async removeWeek(programId: string, weekId: string) {
		const program = await this.findOneOrFail({ id: programId });

		if (!program) {
			return;
		}

		const week = await this.prisma.week.findUnique({
			where: {
				id: weekId,
			},
		});

		if (!week) {
			this.throwNotFoundException({ id: weekId });
		}

		await this.prisma.week.delete({
			where: {
				id: weekId,
			},
		});
	}

	//EXERCISES
	async findAllExercises() {
		const exercises = await this.prisma.exercise.findMany();

		return exercises;
	}

	async findOneExercise(exerciseId: string) {
		const exercise = await this.prisma.exercise.findUnique({
			where: {
				id: exerciseId,
			},
		});

		if (!exercise) {
			this.throwNotFoundException({ id: exerciseId });
		}

		return exercise;
	}

	async createExercise(name: string, description: string) {
		const exercise = await this.prisma.exercise.create({
			data: {
				name,
				description,
			},
		});

		return exercise;
	}

	async removeExercise(exerciseId: string) {
		const exercise = await this.prisma.exercise.findUnique({
			where: {
				id: exerciseId,
			},
		});

		if (!exercise) {
			this.throwNotFoundException({ id: exerciseId });
		}

		await this.prisma.exercise.delete({
			where: {
				id: exerciseId,
			},
		});
	}
}
