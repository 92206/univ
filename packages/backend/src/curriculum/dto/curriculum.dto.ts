import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsEnum,
  IsOptional,
  IsArray,
  Min,
  ValidateNested,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FieldOfStudy } from '@prisma/client';
import { TermDto } from './term.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CurriculumDto {
  @ApiProperty({
    example: 'Software Engineering',
    description: 'Name of the curriculum',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example:
      'A program focusing on software development and engineering principles',
    description: 'Description of the curriculum',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'High school diploma or equivalent',
    description: 'Admission requirements for the curriculum',
  })
  @IsString()
  @IsNotEmpty()
  admissionRequirement: string;

  @ApiProperty({
    example: 'Submit an online application with required documents',
    description: 'Application procedure for admission',
  })
  @IsString()
  @IsNotEmpty()
  applicationProcedure: string;

  @ApiProperty({ example: 10000, description: 'Tuition fee for the program' })
  @IsInt()
  @Min(0)
  tuition: number;

  @ApiPropertyOptional({
    example: null,
    description:
      'ID of the curriculum kind associated with this curriculum , **Required when creating a standalone curriculum** but should be **omitted when creating a course as part of a university**.',
  })
  @IsInt()
  @IsOptional()
  @ValidateIf((object, value) => value !== null)
  curriculumKindId?: number | null;

  @ApiProperty({
    example: FieldOfStudy.Technology_Engineering_And_Technology,
    enum: FieldOfStudy,
    description: 'Field of study associated with this curriculum',
  })
  @IsEnum(FieldOfStudy)
  fieldOfStudy: FieldOfStudy;

  @ApiProperty({
    type: [TermDto],
    description: 'List of academic terms associated with this curriculum',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TermDto)
  terms: TermDto[];
}
