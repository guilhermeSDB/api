import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';

@Module({
	imports: [PrismaModule],
	controllers: [TaskController],
	providers: [TaskService, TaskRepository, PrismaService],
})
export class TaskModule {}
