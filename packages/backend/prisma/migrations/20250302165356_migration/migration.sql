-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_institutionId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "institutionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;
