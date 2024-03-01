import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';

import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TaskService } from './task.service';

@Controller('/task')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Get()
	listAll() {
		return this.taskService.list();
	}

	@Get(':id')
	find(@Param('id') id: string) {
		return this.taskService.find(id);
	}

	@Post()
	create(@Body() createTaskDto: CreateTaskDto) {
		return this.taskService.create(createTaskDto);
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
		return this.taskService.update(id, updateTaskDto);
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.taskService.delete(id);
	}
}
