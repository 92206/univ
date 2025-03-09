import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsInt,
  IsArray,
  ValidateNested,
  IsOptional,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CurriculumDto } from './curriculum.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CurriculumKindDto {
  @ApiProperty({
    example: 'Computer Science',
    description: 'Name of the curriculum kind',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example:
      'A program focusing on computational theory and programming skills',
    description: 'Description of the curriculum kind',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'Bachelor of Science',
    description: 'Degree awarded upon completion',
  })
  @IsString()
  @IsNotEmpty()
  degree: string;

  @ApiProperty({
    example: true,
    description: 'Indicates whether the curriculum kind awards a degree',
  })
  @IsBoolean()
  isDegree: boolean;

  @ApiProperty({ example: '4 years', description: 'Duration of the program' })
  @IsString()
  @IsNotEmpty()
  duration: string;

  @ApiPropertyOptional({
    example: 1,
    description:
      'ID of the institution offering this curriculum kind **Required when creating a standalone curriculumKind** but should be **omitted otherwise**.',
  })
  @IsInt()
  @IsOptional()
  @ValidateIf((object, value) => value !== null)
  institutionId?: number | null;

  @ApiProperty({
    type: [CurriculumDto],
    description: 'List of curriculums associated with this curriculum kind',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CurriculumDto)
  curriculums: CurriculumDto[];
}
