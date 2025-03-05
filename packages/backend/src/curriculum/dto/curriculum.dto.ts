import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsEnum,
  IsOptional,
  IsArray,
  Min,
} from 'class-validator';
import { FieldOfStudy } from '@prisma/client'; // Assuming you have these enums in your Prisma schema
import { TermDto } from './term.dto';

export class CurriculumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  admissionRequirement: string;

  @IsString()
  @IsNotEmpty()
  applicationProcedure: string;

  @IsInt()
  @Min(0) // Ensure the tuition fee is non-negative
  tuition: number;

  @IsInt()
  curriculumKindId: number; // Foreign key to CurriculumKind

  @IsEnum(FieldOfStudy)
  fieldOfStudy: FieldOfStudy;

  @IsOptional()
  @IsArray()
  terms: TermDto[]; // Optional array, can be used for storing multiple terms related to the curriculum
}
