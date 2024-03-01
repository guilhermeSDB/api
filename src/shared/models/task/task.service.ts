import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
	constructor(private readonly repository: TaskRepository) {}

	list(): Promise<Task[] | null> {
		return this.repository.list();
	}

	find(id: string): Promise<Task | null> {
		return this.repository.find(id);
	}

	create(data: CreateTaskDto): Promise<Task> {
		return this.repository.create(data);
	}

	update(id: string, data: UpdateTaskDto): Promise<Task> {
		return this.repository.update(id, data);
	}

	delete(id: string): Promise<Task> {
		return this.repository.delete(id);
	}
}
