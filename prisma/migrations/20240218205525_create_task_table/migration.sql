-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('TO_DO', 'IN_PROGRESS', 'COMPLETED', 'WONT_DO');

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "emoji" TEXT,
    "status" "TaskStatus" DEFAULT 'TO_DO',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
