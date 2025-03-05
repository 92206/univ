import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { InstitutionModule } from './institution/institution.module';
import { CurriculumModule } from './curriculum/curriculum.module';

@Module({
  imports: [DatabaseModule, InstitutionModule, CurriculumModule],
})
export class AppModule {}
