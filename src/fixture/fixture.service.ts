import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Fixture } from './fixture.entity';
import * as moment from 'moment';
import { IFixture, IFixturesGroupByDate } from './interface';

@Injectable()
export class FixtureService {
  constructor(
    @InjectRepository(Fixture)
    private fixtureRepository: Repository<Fixture>,
  ) {}
  public async getFixtureByDate(from: Date, to: Date): Promise<Fixture[]> {
    return await this.fixtureRepository.find({
      where: {
        fixtureDate: Between(from, to),
      },
      relations: {
        league: true,
        home: true,
        away: true,
      },
    });
  }

  public async exitingFixtureOnDate(date: Date): Promise<boolean> {
    const amountFixtureOfDate = (
      await this.fixtureRepository.count({
        where: {
          fixtureDate: Between(
            moment(date).startOf('D').toDate(),
            moment(date).endOf('D').toDate(),
          ),
        },
      })
    ).valueOf();
    return !!amountFixtureOfDate;
  }


  public fixturesGroupByDate(fixtures: any[]): IFixturesGroupByDate {
    return fixtures.reduce((group, product) => {
      const { date } = product;
      group[date] = group[date] ?? [];
      group[date].push(product);
      return group;
    }, {});
  }

  public fixturesPersistentToDomain(fixtures: Fixture[]): IFixture[] {
    return fixtures.map((fixture) => ({
      date: moment(fixture.fixtureDate).format('YYYY-MM-DD'),
      time: moment(fixture.fixtureDate).format('HH:mm'),
      id: fixture.id,
      fixtureDate: fixture.fixtureDate,
      golds: {
        away: fixture.goalsAway,
        home: fixture.goalsHome,
      },
      league: {
        id: fixture.league.id,
        country: fixture.league.country,
        name: fixture.league.name,
        logoUrl: fixture.league.logoUrl,
        round: fixture.league.round,
        season: fixture.league.season,
      },
      teams: {
        away: fixture.away,
        home: fixture.home,
      },
      status: {
        elapsed: 90,
        long: fixture.longStatus,
        short: fixture.shortStatus,
      },
      winner: fixture.winner,
    }));
  }
}
