import { IsEnum, IsOptional, IsString } from 'class-validator';

import { TaskStatusEnum } from '../types/taskStatusEnum';

export class CreateTaskDto {
	@IsString()
	name: string;

	@IsString()
	@IsOptional()
	description?: string;

	@IsString()
	@IsOptional()
	emoji?: string;

	@IsEnum(TaskStatusEnum)
	@IsOptional()
	status?: TaskStatusEnum;
}
