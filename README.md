## Documentação projeto

```bash
http://localhost:3000/docs
```

### Dentro da raiz do projeto tem um arquivo chamado `Insomnia_2024-08-19.json` que pode ser importado para o insomnia apra executar as rotas

## Installation

```bash
$ pnpm install
```

## Docker

```bash
docker compose up
```

## Migrations and seeds

```bash
# Rodar migrações
npx prisma migrate dev

# Semear o banco de dados
npx prisma db:seed
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# test coverage
$ pnpm run test:cov
```
