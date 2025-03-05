import { IsString, IsNotEmpty, IsBoolean, IsInt } from 'class-validator';
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
  degree: string;  // Degree or Diploma

  @IsBoolean()
  isDegree: boolean;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsInt()
  institutionId: number; // Foreign key to Institution, this is a required field

  curriculums : CurriculumDto[]

}
