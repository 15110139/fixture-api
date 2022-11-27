import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from './league.entity';

@Module({
  imports: [TypeOrmModule.forFeature([League])],
})
export class LeagueModule {}
