# Monorepo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Requirements

[*] node v20.12.2

[*] pnpm 8.15.5

* PNPM: https://pnpm.io/
* NVM: https://github.com/nvm-sh/nvm
* NX: https://nx.dev/getting-started/intro
* Docker: https://docs.docker.com/guides/
* Docker Compose: https://docs.docker.com/compose/

## Run example

First try `pnm build:all` and then start docker with cache service

```sh
pnpm dc:s cache_redis
```

Then start your local cache app with this command

```sh
REDIS_HOST=localhost PORT=5000 pnpm dev cache
```

Then try add value to the cache service

```sh
curl --location 'http://localhost:5000/' \
--header 'Content-Type: application/json' \
--data '{
    "value": "my data 1"
}'
```

```json
{"cacheId":{"value":"9e726b44-be1a-4a7b-811f-81d3f8bfd0a7"}}
```

Then try get from cache

```sh
curl --location 'http://localhost:5000/9e726b44-be1a-4a7b-811f-81d3f8bfd0a7'
```

```json
{"cache":{"id":{"value":"9e726b44-be1a-4a7b-811f-81d3f8bfd0a7"},"value":"my data 1"}}
```

## Helpful commands

A lot of helpful commands to work with this monorepo based on NX

Almost all commands encapsulate a native NX command

### app

> Create new node application

```sh
pnpm app new-app
```

Which framework do you want to use?

```sh
none
```

> What should be the project name and where should it be generated?

```sh
Derived:
  Name: new-app
  Root: apps/new-app
```

### lib

```sh
pnpm lib my-lib
```

> ? Which unit test runner would you like to use? …

```sh
jest
```

> ? Which bundler would you like to use to build the library? Choose 'none' to skip build setup. …

```sh
tsc
```

> What should be the project name and where should it be generated? …

```sh
Derived:
  Name: my-lib
  Root: libs/my-lib
```

### dev

Run app in your local

```sh
pnpm dev my-app
```

> if you have imported a lib in you app, so first run build command to compile the library and then runcommand again.

### show-web

Show a web with your app definitions and other kind of helpful features

```sh
pnpm show-web my-app
```

### test:all

Run all your apps and libs testing

```sh
pnpm test:all
```

### test

Run a sin app or lib

```sh
pnpm test my-app or my-lib
```

### lint:all

Run all your apps and libs linters

```sh
pnpm lint:all
```

### lint:all:fix

Run all your apps and libs linters and trying to fix them

```sh
pnpm lint:all:fix
```

### lint

Try linter to a single app or lib

```sh
pnpm lint my-app or my lib
```

### lint:fix

Try linter to a single app or lib and trying to fix it

```sh
pnpm lint:fix my-app or my lib
```

### build:all

Build all your apps and libs, and put them in the dist directory

```sh
pnpm build:all
```

### build

Build your app or lib and put it in the dist directory

```sh
pnpm build app or lib
```

### dc:s

Start your app defined as a service in your docker-compose.yml

```sh
pnpm dc:s service-name
```

### dc

Start all services defined in your docker-compose.yml

```sh
pnpm dc
```
