import { Module } from '@nestjs/common';
import { TaskModule } from './models/task/task.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
	imports: [...[TaskModule, PrismaModule]],
	providers: [...[TaskModule, PrismaModule]],
})
export class SharedModule {}
