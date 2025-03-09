import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsInt,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CurriculumDto } from './curriculum.dto';

export class CurriculumKindDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  degree: string;

  @IsBoolean()
  isDegree: boolean;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsInt()
  @IsOptional()
  institutionId?: number;

  @IsArray()
  @ValidateNested({ each: true }) // ✅ Ensure each element in array is validated
  @Type(() => CurriculumDto) // ✅ Ensure objects are transformed into instances of CurriculumDto
  curriculums: CurriculumDto[];
}
