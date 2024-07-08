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
}
