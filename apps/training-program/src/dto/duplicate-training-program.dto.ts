import { IsNotEmpty, IsString } from 'class-validator';

export class DuplicateTrainingProgramDto {
	@IsString()
	@IsNotEmpty()
	name: string;
}
