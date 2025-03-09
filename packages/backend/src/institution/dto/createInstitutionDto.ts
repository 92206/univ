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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateInstitutionWithRelationsDto {
  @ApiProperty({
    example: 'Harvard University',
    description: 'Name of the institution',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'https://www.harvard.edu',
    description: 'Website of the institution',
  })
  @IsString()
  @IsNotEmpty()
  website: string;

  @ApiProperty({
    example: '+1-617-495-1000',
    description: 'Contact number of the institution',
  })
  @IsString()
  @IsNotEmpty()
  contact: string;

  @ApiProperty({
    example: 'NECHE',
    description: 'Accreditation of the institution',
  })
  @IsString()
  @IsNotEmpty()
  accreditation: string;

  @ApiProperty({
    example: 1636,
    description: 'Establishment year of the institution',
  })
  @IsInt()
  estYear: number;

  @ApiProperty({
    example: 'Cambridge, MA, USA',
    description: 'Location of the institution',
  })
  @IsString()
  location: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Indicates whether the institution is verified',
  })
  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @ApiProperty({
    example: true,
    description: 'Indicates whether the institution is public',
  })
  @IsBoolean()
  isPublic: boolean;

  @ApiPropertyOptional({
    example: 'https://example.com/logo.png',
    description: 'URL of the institution logo',
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional({
    description: 'Parent institution ID, if applicable',
    example: null,
  })
  @IsOptional()
  @IsNumber()
  parentInstitutionId?: number;

  @ApiProperty({
    example: InstitutionType.University,
    enum: InstitutionType,
    description: 'Type of institution',
  })
  @IsEnum(InstitutionType)
  institutionType: InstitutionType;

  @ApiProperty({
    type: [CurriculumKindDto],
    description: 'List of curriculum kinds offered by the institution',
  })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CurriculumKindDto)
  curriculumKinds: CurriculumKindDto[];
}
