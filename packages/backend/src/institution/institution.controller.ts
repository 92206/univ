import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstitutionService } from './institution.service';
// import {  Prisma } from '@prisma/client';
import { CreateInstitutionWithRelationsDto } from './dto/createInstitutionDto';

@Controller('institution')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Post()
  create(@Body() createInstitutionDto: CreateInstitutionWithRelationsDto) {
    return this.institutionService.create(createInstitutionDto);
  }

  @Get()
  findAll() {
    return this.institutionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institutionService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateInstitutionDto: Prisma.InstitutionUpdateInput,
  // ) {
  //   return this.institutionService.update(+id, updateInstitutionDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.institutionService.remove(+id);
  }
}
