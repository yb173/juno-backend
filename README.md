# Juno Backend

## Create Database
```sh
$ docker-compose down -v
$ docker-compose up -d  
```

## Installation

```sh
$ yarn install --frozen-lockfile
```

## Running the app

```sh
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```sh
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## License

Juno Backend is [MIT licensed](LICENSE).
