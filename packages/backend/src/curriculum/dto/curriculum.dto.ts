import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsEnum,
  IsOptional,
  IsArray,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FieldOfStudy } from '@prisma/client';
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
  @Min(0)
  tuition: number;

  @IsInt()
  @IsOptional()
  curriculumKindId?: number;

  @IsEnum(FieldOfStudy)
  fieldOfStudy: FieldOfStudy;

  @IsArray()
  @ValidateNested({ each: true }) // ✅ Ensures each TermDto is validated
  @Type(() => TermDto) // ✅ Transforms plain objects to TermDto instances
  terms: TermDto[];
}
