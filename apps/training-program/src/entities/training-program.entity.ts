export class TrainingProgram {
	id: string;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	weeks: TrainingWeek[];
}

export class TrainingWeek {
	id: string;
	programId: string;
	program: TrainingProgram;
	days: TrainingDay[];
}

export class TrainingDay {
	id: string;
	weekId: string;
	week: TrainingWeek;
	type: string;
	exercises: TrainingExercise[];
}

export class TrainingExercise {
	id: string;
	dayId: string;
	day: TrainingDay;
	name: string;
	createdAt: Date;
	updatedAt: Date;
}
