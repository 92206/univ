/*
  Warnings:

  - A unique constraint covering the columns `[name,institutionId]` on the table `CurriculumKind` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Institution` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CurriculumKind_name_institutionId_key" ON "CurriculumKind"("name", "institutionId");

-- CreateIndex
CREATE UNIQUE INDEX "Institution_name_key" ON "Institution"("name");
