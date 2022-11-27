import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FixtureController } from './fixture.controller';
import { Fixture } from './fixture.entity';
import { FixtureService } from './fixture.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fixture])],
  controllers: [FixtureController],
  providers: [FixtureService],
})
export class FixtureModule {}
