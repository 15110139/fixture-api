import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fixture } from './fixture/fixture.entity';
import { FixtureModule } from './fixture/fixture.module';
import { League } from './league/league.entity';
import { LeagueModule } from './league/league.module';
import { Team } from './team/team.entity';
import { TeamModule } from './team/team.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'football_fixtures_api',
      entities: [Fixture, Team, League],
      synchronize: true,
      password: '12345678',
    }),
    FixtureModule,
    LeagueModule,
    TeamModule,
  ],
})
export class AppModule {}
