import { Injectable } from '@nestjs/common';
import { CurriculumDto } from './dto/curriculum.dto';

@Injectable()
export class CurriculumService {
  create(createCurriculumDto: CurriculumDto) {
    return 'This action adds a new curriculum';
  }

  findAll() {
    return `This action returns all curriculum`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curriculum`;
  }

  // update(id: number, updateCurriculumDto: UpdateCurriculumDto) {
  //   return `This action updates a #${id} curriculum`;
  // }

  remove(id: number) {
    return `This action removes a #${id} curriculum`;
  }
}
