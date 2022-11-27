<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Instructions for running local instance

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

---

# API description
# API deploy on Server
http://159.223.67.118:3000/
| API Name | URL           |
| ---------- | --------------- |
| List fixture       | http://159.223.67.118:3000/board/fixtures?from=2022-11-20&to=2022-11-30 |
| Check existing fixture| http://159.223.67.118:3000/check-existing-fixtures?date=2022-11-27 |


## API: List fixture
## GET http://localhost:3000/board/fixtures?from=2022-11-20&to=2022-11-30

### Query params

| Query name | Value           | Description |
| ---------- | --------------- | ----------- |
| from       | Date YYYY-MM-DD |             |
| to         | Date YYYY-MM-DD |             |


### Response
#### FixtureStatus Schema
| Filed name | type/schema  | Description |
| ---------- | --------------- | ----------- |
|long         |string |            |
|short        | string |             | 
|elapsed | number |             | 

#### League Schema
| Filed name | type/schema  | Description |
| ---------- | --------------- | ----------- |
|id         |string |            |
|name        | string |             | 
|logoUrl | string |             | 


#### Golds Schema
| Filed name | type/schema  | Description |
| ---------- | --------------- | ----------- |
|home         |number |            |
|away        | number |             |

#### Fixture Schema
| Filed name | type/schema  | Description |
| ---------- | --------------- | ----------- |
|id          |string |            |
|fixtureDate | date |             |
|league      | League |             |
|golds       | Golds |             |
|status      | FixtureStatus |             |
|date        | string |             |
|time        | string |             |
|winner      | string  |             |

#### GetFixturesByDateItem Schema
| Filed name | type/schema           | Description |
| ---------- | --------------- | ----------- |
| date       |string |             |
| fixtures         | Fixture |             |

#### 200 OK
```json
[
  {
    "date": "2022-11-26",
    "fixtures": [
      {
        "date": "2022-11-26",
        "time": "15:15",
        "id": "9a1f5dc5-3f28-4fdc-8eef-722a4d773796",
        "fixtureDate": "2022-11-26T08:15:18.000Z",
        "golds": {
          "away": 1,
          "home": 2
        },
        "league": {
          "id": "e8b3c35b-e2ef-4129-93a5-ec8186704a1a",
          "country": "World",
          "name": "Euro Championship",
          "logoUrl": "https://media.api-sports.io/football/leagues/4.png",
          "round": null,
          "season": null
        },
        "teams": {
          "away": {
            "id": "03f7fbc9-664b-4e50-a205-f06b8f46e414",
            "name": "Manchester City",
            "logoUrl": ""
          },
          "home": {
            "id": "00bd5ca0-09ea-49a2-9b7e-d44c6dadd20c",
            "name": "Liverpool",
            "logoUrl": ""
          }
        },
        "status": {
          "elapsed": 90,
          "long": "Full Times",
          "short": "FT"
        },
        "winner": "HOME"
      }
    ]
  },
  {
    "date": "2022-11-27",
    "fixtures": [
      {
        "date": "2022-11-27",
        "time": "15:30",
        "id": "b017f68c-a66a-4bf6-ad08-c8cb704aa85c",
        "fixtureDate": "2022-11-27T08:30:00.000Z",
        "golds": {
          "away": null,
          "home": null
        },
        "league": {
          "id": "e8b3c35b-e2ef-4129-93a5-ec8186704a1a",
          "country": "World",
          "name": "Euro Championship",
          "logoUrl": "https://media.api-sports.io/football/leagues/4.png",
          "round": null,
          "season": null
        },
        "teams": {
          "away": {
            "id": "03f7fbc9-664b-4e50-a205-f06b8f46e414",
            "name": "Manchester City",
            "logoUrl": ""
          },
          "home": {
            "id": "00bd5ca0-09ea-49a2-9b7e-d44c6dadd20c",
            "name": "Liverpool",
            "logoUrl": ""
          }
        },
        "status": {
          "elapsed": 90,
          "long": "Not Started",
          "short": "NS"
        },
        "winner": null
      },
      {
        "date": "2022-11-27",
        "time": "15:30",
        "id": "e9180d9f-9d0b-4eed-94ec-dc7882ce5311",
        "fixtureDate": "2022-11-27T08:30:00.000Z",
        "golds": {
          "away": null,
          "home": null
        },
        "league": {
          "id": "e8b3c35b-e2ef-4129-93a5-ec8186704a1a",
          "country": "World",
          "name": "Euro Championship",
          "logoUrl": "https://media.api-sports.io/football/leagues/4.png",
          "round": null,
          "season": null
        },
        "teams": {
          "away": {
            "id": "d116cd59-091d-4a0a-909a-48b19cfd5be9",
            "name": "Chelsea",
            "logoUrl": ""
          },
          "home": {
            "id": "03f7fbc9-664b-4e50-a205-f06b8f46e414",
            "name": "Manchester City",
            "logoUrl": ""
          }
        },
        "status": {
          "elapsed": 90,
          "long": "Not Started",
          "short": "NS"
        },
        "winner": null
      }
    ]
  }
]
```
#### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": [
    "to must be a Date instance"
  ],
  "error": "Bad Request"
}
```

#### 500 Internal server error
```json
{
  "statusCode": 500,
  "message": "Internal Server Error"
}
```

## API: Check existing fixture on the date
## GET http://localhost:3000/check-existing-fixtures?date=2022-11-27
### Query params

| Query name | Value           | Description |
| ---------- | --------------- | ----------- |
| from       | Date YYYY-MM-DD |             |
| to         | Date YYYY-MM-DD |             |
### Response
#### 200 OK
```json
{
  "existing": true
}
```
#### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": [
    "to must be a Date instance"
  ],
  "error": "Bad Request"
}
```

#### 500 Internal server error
```json
{
  "statusCode": 500,
  "message": "Internal Server Error"
}
```
