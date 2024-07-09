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

	async duplicate(programId: string, duplicatedProgramName: string) {
		const program = await this.findOneOrFail({ id: programId });

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
							days: {
								create: week.days?.map(day => {
									return {
										exercises: {
											create: day.exercises.map(exercise => {
												return {
													name: exercise.name,
												};
											}),
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

	async addWeek(programId: string) {
		const program = await this.findOneOrFail({ id: programId });

		if (!program) {
			return;
		}

		const newWeek = await this.prisma.week.create({
			data: {
				programId: programId,
				days: {},
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
}
