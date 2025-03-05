import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateInstitutionWithRelationsDto } from './dto/createInstitutionDto';

@Injectable()
export class InstitutionService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createInstitutionDto: CreateInstitutionWithRelationsDto) {
    const { curriculumKinds, ...institutionInfo } = createInstitutionDto;

    //  Create Institution first
    const institution = await this.databaseService.institution.create({
      data: institutionInfo,
    });

    if (!curriculumKinds || curriculumKinds.length === 0) {
      return institution;
    }

    //  Create CurriculumKinds and link to Institution
    for (const curriculumKind of curriculumKinds) {
      const { curriculums, ...curriculumKindInfo } = curriculumKind;
      const createdCurriculumKind =
        await this.databaseService.curriculumKind.create({
          data: {
            ...curriculumKindInfo,
            institutionId: institution.id, // Link to institution
          },
        });

      if (!curriculums || curriculums.length === 0) {
        continue;
      }

      //  Create Curriculums and link to CurriculumKind
      for (const curriculum of curriculums) {
        const { terms, ...curriculumInfo } = curriculum;
        const createdCurriculum = await this.databaseService.curriculum.create({
          data: {
            ...curriculumInfo,
            curriculumKindId: createdCurriculumKind.id, // Link to CurriculumKind
          },
        });

        if (!terms || terms.length === 0) {
          continue;
        }

        // 4️⃣ Create Terms and link to Curriculum
        for (const term of terms) {
          const { courses, ...termInfo } = term;
          const createdTerm = await this.databaseService.term.create({
            data: {
              ...termInfo,
              curriculumId: createdCurriculum.id, // Link to Curriculum
            },
          });

          if (!courses || courses.length === 0) {
            continue;
          }

          // 5️⃣ Create Courses and link to Term
          for (const course of courses) {
            await this.databaseService.course.create({
              data: {
                ...course,
                termId: createdTerm.id, // Link to Term
              },
            });
          }
        }
      }
    }

    return institution;
  }

  findAll() {
    return this.databaseService.institution.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} institution`;
  }

  // update(id: number, updateInstitutionDto: Prisma.InstitutionUpdateInput) {
  //   return `This action updates a #${id} institution`;
  // }

  remove(id: number) {
    return `This action removes a #${id} institution`;
  }
}
