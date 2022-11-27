import { ILeague } from 'src/league';
import { ITeam } from 'src/team';

export enum WINNER_ENUM {
  HOME = 'HOME',
  AWAY = 'AWAY',
}

export interface IFixtureStatus {
  long: string; // 'Match Finished';
  short: string; // 'FT';
  elapsed: number; // 90;
}

export interface IGolds {
  home: number;
  away: number;
}

export interface ITeams {
  away: ITeam;
  home: ITeam;
}

export interface IFixture {
  id: string;
  fixtureDate: Date;
  league: ILeague;
  golds: IGolds;
  winner: WINNER_ENUM;
  status: IFixtureStatus;
  teams: ITeams;
  date: string;
  time: string;
}

export interface IGetFixturesByDateItem {
  date: string;
  fixtures: IFixture[];
}
export interface IFixturesGroupByDate {
  [key: string]: IFixture[];
}
