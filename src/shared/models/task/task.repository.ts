import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Injectable()
export class TaskRepository {
	constructor(private readonly prismaService: PrismaService) {}

	list(): Promise<Task[] | null> {
		return this.prismaService.task.findMany();
	}

	find(id: string): Promise<Task | null> {
		return this.prismaService.task.findUnique({
			where: {
				id,
			},
		});
	}

	create(data: CreateTaskDto): Promise<Task> {
		return this.prismaService.task.create({
			data,
		});
	}

	update(id: string, data: UpdateTaskDto) {
		return this.prismaService.task.update({
			data,
			where: {
				id,
			},
		});
	}

	delete(id: string): Promise<Task> {
		return this.prismaService.task.delete({ where: { id } });
	}
}
