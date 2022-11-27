import { Controller, Get, Query } from '@nestjs/common';
import {
  CheckExitingFixtureOnDateQueryDTO,
  GetFixturesByDateQueryDTO,
} from './dto/fixture.dto';
import { FixtureService } from './fixture.service';
import { IGetFixturesByDateItem } from './interface';

@Controller()
export class FixtureController {
  constructor(private fixtureService: FixtureService) {}
  @Get('board/fixtures')
  public async getFixturesByDate(
    @Query() query: GetFixturesByDateQueryDTO,
  ): Promise<IGetFixturesByDateItem[]> {
    const fixturesPersistentData = await this.fixtureService.getFixtureByDate(
      query.from,
      query.to,
    );

    const fixtures = this.fixtureService.fixturesPersistentToDomain(
      fixturesPersistentData,
    );
    const groupFixtureByDate =
      this.fixtureService.fixturesGroupByDate(fixtures);
    const result: IGetFixturesByDateItem[] = [];
    for (const [key, value] of Object.entries(groupFixtureByDate)) {
      result.push({
        date: key,
        fixtures: value,
      });
    }
    return result;
  }

  @Get('check-existing-fixtures')
  public async exitingFixtureOnDate(
    @Query() query: CheckExitingFixtureOnDateQueryDTO,
  ): Promise<any> {
    const result = await this.fixtureService.exitingFixtureOnDate(query.date);
    return {
      existing: result,
    };
  }
}
