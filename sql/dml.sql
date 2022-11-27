-- Add data for leagues table
INSERT INTO
    `leagues` (name, country, logo_url, season, round, id)
VALUES
    (
        'Serie A',
        'Brazil',
        'https://media.api-sports.io/football/leagues/71.png',
        NULL,
        NULL,
        '49767f4e-7953-47eb-b134-ad25541db911'
    ),
    (
        'League One',
        'England',
        'https://media.api-sports.io/football/leagues/41.png',
        NULL,
        NULL,
        'a4b98d43-da3c-40fd-bf4d-5c46385437ce'
    ),
    (
        'FA Cup',
        'England',
        'https://media.api-sports.io/football/leagues/45.png',
        NULL,
        NULL,
        'db1a2d97-9b46-4d5c-9fe8-9189b8e4c666'
    ),
    (
        'Euro Championship',
        'World',
        'https://media.api-sports.io/football/leagues/4.png',
        NULL,
        NULL,
        'e8b3c35b-e2ef-4129-93a5-ec8186704a1a'
    );


-- Add data for teams table
INSERT INTO
    `teams`(name, id, logo_url)
VALUES
    (
        'Liverpool',
        '00bd5ca0-09ea-49a2-9b7e-d44c6dadd20c',
        ''
    ),
    (
        'Manchester City',
        '03f7fbc9-664b-4e50-a205-f06b8f46e414',
        ''
    ),
    (
        'Arsenal',
        '461f2a83-9b9c-4bf1-9e32-7a6e2c9c9d04',
        ''
    ),
    (
        'Manchester United',
        '7a4f7887-8462-4e39-abf3-bccd87b69f97',
        ''
    ),
    (
        'Chelsea',
        'd116cd59-091d-4a0a-909a-48b19cfd5be9',
        ''
    );


-- Add data for fixtures table
INSERT INTO
    `fixtures` (
        fixture_date,
        long_status,
        short_status,
        goals_home,
        goals_away,
        winner,
        id,
        league_id,
        home_id,
        away_id
    )
VALUES
    (
        '2022-11-26 15:15:18',
        'Full Times',
        'FT',
        2,
        1,
        'HOME',
        '9a1f5dc5-3f28-4fdc-8eef-722a4d773796',
        'e8b3c35b-e2ef-4129-93a5-ec8186704a1a',
        '00bd5ca0-09ea-49a2-9b7e-d44c6dadd20c',
        '03f7fbc9-664b-4e50-a205-f06b8f46e414'
    ),
    (
        '2022-11-27 15:30:00',
        'Not Started',
        'NS',
        NULL,
        NULL,
        NULL,
        'b017f68c-a66a-4bf6-ad08-c8cb704aa85c',
        'e8b3c35b-e2ef-4129-93a5-ec8186704a1a',
        '00bd5ca0-09ea-49a2-9b7e-d44c6dadd20c',
        '03f7fbc9-664b-4e50-a205-f06b8f46e414'
    ),
    (
        '2022-11-27 15:30:00',
        'Not Started',
        'NS',
        NULL,
        NULL,
        NULL,
        'e9180d9f-9d0b-4eed-94ec-dc7882ce5311',
        'e8b3c35b-e2ef-4129-93a5-ec8186704a1a',
        '03f7fbc9-664b-4e50-a205-f06b8f46e414',
        'd116cd59-091d-4a0a-909a-48b19cfd5be9'
    );