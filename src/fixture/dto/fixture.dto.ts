import { IsDate, IsOptional } from 'class-validator';
import { Expose, Type } from 'class-transformer';

@Expose()
export class GetFixturesByDateQueryDTO {
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  public from: Date;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  public to: Date;
}

export class CheckExitingFixtureOnDateQueryDTO {
  @Type(() => Date)
  @IsDate()
  public date: Date;
}
