import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsDate,
  ValidateNested,
} from 'class-validator';
import { CourseDto } from './course.dto';
import { Type } from 'class-transformer';

export class TermDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsInt()
  curriculumId?: number; // Foreign key to Curriculum, this is a required field
  @ValidateNested({ each: true }) // ✅ Ensures each TermDto is validated
  @Type(() => CourseDto) // ✅ Transforms plain objects to TermDto instances
  courses: CourseDto[];
}
