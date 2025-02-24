import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class InstitutionService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createInstitutionDto: Prisma.InstitutionCreateInput) {
    return this.databaseService.institution.create({
      data: createInstitutionDto,
    });
  }

  findAll() {
    return this.databaseService.institution.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} institution`;
  }

  update(id: number, updateInstitutionDto: Prisma.InstitutionUpdateInput) {
    return `This action updates a #${id} institution`;
  }

  remove(id: number) {
    return `This action removes a #${id} institution`;
  }
}
