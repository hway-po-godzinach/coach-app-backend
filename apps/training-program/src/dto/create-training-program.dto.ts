import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTrainingProgramDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	description: string;
}
