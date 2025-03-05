import { IsString, IsNotEmpty, IsInt, IsDate } from 'class-validator';
import { CourseDto } from './course.dto';

export class TermDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsInt()
  curriculumId: number; // Foreign key to Curriculum, this is a required field

  courses: CourseDto[];
}
