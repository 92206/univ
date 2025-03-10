import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CurriculumDto } from './dto/curriculum.dto';

@Controller('curriculum')
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) {}

  @Post()
  create(@Body() createCurriculumDto: CurriculumDto) {
    return this.curriculumService.create(createCurriculumDto);
  }

  @Get()
  findAll() {
    return this.curriculumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curriculumService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCurriculumDto: UpdateCurriculumDto) {
  //   return this.curriculumService.update(+id, updateCurriculumDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculumService.remove(+id);
  }
}
