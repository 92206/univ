import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { InstitutionModule } from './institution/institution.module';

@Module({
  imports: [DatabaseModule, InstitutionModule],
})
export class AppModule {}
