import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsDate,
  Min,
  ValidateIf,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CourseDto {
  @ApiProperty({
    example: 'Introduction to AI',
    description: 'Name of the course',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'A foundational course on artificial intelligence concepts',
    description: 'Course description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 6,
    description: 'Number of credits awarded for the course',
  })
  @IsInt()
  @Min(0)
  credits: number;

  @ApiProperty({
    example: 'Mathematics, Programming Basics',
    description: 'Prerequisite courses needed before taking this course',
  })
  @IsString()
  @IsNotEmpty()
  preReqs: string;

  @ApiProperty({
    example: '2025-09-10',
    description: 'Date when the course is scheduled',
    type: String,
    format: 'date',
  })
  @IsDate()
  courseDate: Date;

  @ApiProperty({
    example: '2025-09-01',
    description: 'Start date of the course',
    type: String,
    format: 'date',
  })
  @IsDate()
  startDate: Date;

  @ApiPropertyOptional({
    example: null,
    description:
      'Foreign key to the term this course belongs to. **Required when creating a standalone course** but should be **omitted when creating a course as part of a university**.',
  })
  @IsInt()
  @IsOptional()
  @ValidateIf((object, value) => value !== null)
  termId?: number | null;

  @ApiPropertyOptional({
    example: null,
    description:
      'Foreign key to the institution offering this course **Required when creating a standalone course** but should be **omitted when creating a course as part of a university**.',
  })
  @IsInt()
  @IsOptional()
  @ValidateIf((object, value) => value !== null)
  institutionId?: number | null;
}
