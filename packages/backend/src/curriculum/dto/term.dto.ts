import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsDate,
  ValidateNested,
  ValidateIf,
  IsOptional,
} from 'class-validator';
import { CourseDto } from './course.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class TermDto {
  @ApiProperty({
    example: 'Fall 2025',
    description: 'Name of the academic term',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '2025-09-01',
    description: 'Start date of the term',
    type: String,
    format: 'date',
  })
  @IsDate()
  startDate: Date;

  @ApiProperty({
    example: '2026-01-15',
    description: 'End date of the term',
    type: String,
    format: 'date',
  })
  @IsDate()
  endDate: Date;

  @ApiProperty({
    example: null,
    description:
      'Foreign key to the associated curriculum , **Required when creating a standalone term** but should be **omitted otherwise**.',
  })
  @IsInt()
  @ValidateIf((object, value) => value !== null)
  @IsOptional()
  curriculumId?: number | null;

  @ApiProperty({
    type: [CourseDto],
    description: 'List of courses included in this term',
  })
  @ValidateNested({ each: true })
  @Type(() => CourseDto)
  courses: CourseDto[];
}
