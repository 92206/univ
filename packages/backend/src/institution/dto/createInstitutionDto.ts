import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsEnum,
  IsArray,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';
import { InstitutionType } from '@prisma/client'; // Assuming this is the enum you have in Prisma schema.
import { CurriculumKindDto } from 'src/curriculum/dto/curriculumKind.dto';
import { Type } from 'class-transformer';

export class CreateInstitutionWithRelationsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  website: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsString()
  @IsNotEmpty()
  accreditation: string;

  @IsInt()
  estYear: number;

  @IsString()
  location: string;

  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @IsBoolean()
  isPublic: boolean;

  @IsOptional()
  @IsString()
  imageUrl?: string;
  @IsOptional()
  @IsNumber()
  parentInstitutionId?: number;
  @IsEnum(InstitutionType)
  institutionType: InstitutionType;
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true }) // ✅ Ensures each TermDto is validated
  @Type(() => CurriculumKindDto) // ✅ Transforms plain objects to TermDto instances
  curriculumKinds: CurriculumKindDto[];
}
