import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsDate,
  Min,
} from 'class-validator';

export class CourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(0) // Ensures that credits are a non-negative integer
  credits: number;

  @IsString()
  @IsNotEmpty()
  preReqs: string;

  @IsDate()
  courseDate: Date;

  @IsDate()
  startDate: Date;

  @IsInt()
  @IsOptional()
  termId?: number; // Foreign key to Term

  @IsOptional()
  @IsInt()
  institutionId?: number; // Foreign key to Institution (optional)
}
