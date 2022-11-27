CREATE DATABASE football_fixtures_api;

CREATE TABLE fixtures (
    'id' varchar(64),
    'fixture_date' Date,
    'long_status' varchar(256),
    'short_status' varchar(256),
    'league_id' varchar(64),
    'home_id' varchar(64),
    'away_id' varchar(64),
    'goals_home' int,
    'goals_away' int,
    'winner' varchar(32),
    PRIMARY KEY ('id'),
    FOREIGN KEY ('league_id') REFERENCES leagues('id'),
    FOREIGN KEY ('home_id') REFERENCES teams('id'),
    FOREIGN KEY ('away_id') REFERENCES teams('id')
);

CREATE TABLE leagues (
    'id' varchar(64),
    'name' varchar(255),
    'country' varchar(64),
    'logo_url' text,
    'season' int default null,
    'round' varchar(255) default null,
    PRIMARY KEY ('id')
);

CREATE TABLE teams (
    'id' varchar(64),
    'name' varchar(256),
    'logo_url' text,
    PRIMARY KEY ('id'),
)