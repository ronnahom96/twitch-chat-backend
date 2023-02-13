# Map Colonies training exercise - Catalog exercise (NodeJS + Typescript, Postgres, PostGIS)

-----------------------
## API
Checkout the OpenAPI spec [here](/openapi3.yaml)

## Requirements
1. Nodejs.
2. Postgres with PostGIS extension.

## Installation

```bash
npm install
```

## Run Locally

Clone the project

```bash

git clone https://github.com/ronnahom96/catalog-exercise

```

Go to the project directory

```bash

cd my-project

```

Create your .env and .env.test (for testing purposes) file for connecting to postgres with the details below

```bash

POSTGRES_DB_USER=XXXXX
POSTGRES_DB_PASSWORD=XXXXX
POSTGRES_DB_NAME=XXXXX
PRODUCT_TABLE_NAME=XXXXX

```


Install dependencies

```bash

npm install

```

Start the server

```bash

npm run start

```

## Running Tests

To run tests, run the following command

```bash

npm run test

```

To only run unit tests:
```bash
npm run test:unit
```

To only run integration tests:
```bash
npm run test:integration
```
