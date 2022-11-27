import { League } from 'src/league';
import { Team } from 'src/team/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WINNER_ENUM } from './interface/fixture.interface';

@Entity({ name: 'fixtures' })
export class Fixture {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'fixture_date' })
  fixtureDate: Date;

  @Column({ name: 'long_status' })
  longStatus: string;

  @Column({ name: 'short_status' })
  shortStatus: string;

  @Column({ name: 'league_id' })
  leagueId: string;

  @ManyToOne(() => League, {
    cascade: true,
  })
  @JoinColumn({
    foreignKeyConstraintName: 'fixtures_leagues',
    referencedColumnName: 'id',
    name: 'league_id',
  })
  league: League;

  @Column({ name: 'home_id' })
  homeId: string;

  @Column({ name: 'away_id' })
  awayId: string;

  @Column({ name: 'goals_home', default: null })
  goalsHome: number;

  @Column({ name: 'goals_away', default: null })
  goalsAway: number;

  @Column({ enumName: typeof WINNER_ENUM, default: null })
  winner: WINNER_ENUM;

  @ManyToOne(() => Team, {
    cascade: true,
  })
  @JoinColumn({
    foreignKeyConstraintName: 'fixtures_team_away',
    referencedColumnName: 'id',
    name: 'away_id',
  })
  away: Team;

  @ManyToOne(() => Team, {
    cascade: true,
  })
  @JoinColumn({
    foreignKeyConstraintName: 'fixtures_team_home',
    referencedColumnName: 'id',
    name: 'home_id',
  })
  home: Team;
}
