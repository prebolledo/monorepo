# MONOREPO

- Install vnm https://github.com/nvm-sh/nvm
- Install version 20.12.2

- Install pnpm
  
  ```shell
  npm install -g pnpm@9.1.0
  ```

- Init
  
  ```shell
  pnpm init
  ```

- Create workspace

  ```shell
  touch pnpm-workspace.yaml
  ```

- Create .nvmrc

  ```shell
  echo "v20.12.2" > .nvmrc
  ```

- Add typescript

  ```shell
  pnpm add -D typescript @types/node -w
  ```

- Create tsconfig.base.json

  ```json
  {
    "compilerOptions": {
      "strict": true,
      "strictNullChecks": true,
      "esModuleInterop": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "noUnusedLocals": true,
      "skipLibCheck": true,
      "moduleResolution": "node",
      "declaration": true,
      "target": "ES2022",
      "module": "CommonJS",
      "sourceMap": true    
    }
  }  
  ```

- Create tsconfig.json

  ```json
  {
    "extends": "./tsconfig.base.json",
    "include": ["src/**/*"]
  }
  ```

## Create Libs

- Create libs

  ```shell
  mkdir libs
  ````  

## Create Apps

- Create libs

  ```shell
  mkdir apps
  ````  

- Add apps and libs to pnpm-workspace.yaml

  ```yaml
  packages:
    - 'apps/*'
    - 'libs/*'
  ```  

## Project

- Create project
  
  ```shell
  mkdir apps/project-one
  ```

- Init project

  ```shell
  cd apps/project-one && pnpm init
  ```

- Rename project-one name
    "name": "project-one" > "name": "@monorepo/project-one",

- Create src dir

  ```shell
  mkdir src
  ```

- Add index
  
  ```shell
    echo "console.log('index');" > src/index.ts
  ```

- Add ts-node-dev to local environment
  
  ```shell
  pnpm add --filter project-one ts-node-dev 
  ```  

- Define index as main: open `package.json`
  
  > "main": "src/index.ts",

- Add script: open `package.json`

  ```json
    ...
    "scripts": {
      "build": "tsc",
      "dev": "ts-node-dev --respawn --watch src src/index.ts",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
  ````

- Add engines

  ```json
    ...
    "engines": {
      "node": "20.12.2",
      "pnpm": "9.1.0"
    },
  ```

- Result package.json

  ```json
  {
    "name": "@monorepo/project-one",
    "version": "1.0.0",
    "description": "",
    "main": "src/index.ts",
    "scripts": {
      "build": "tsc",
      "dev": "ts-node-dev --respawn --watch src src/index.ts",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "engines": {
      "node": "20.12.2",
      "pnpm": "9.1.0"
    },
    "dependencies": {
      "@monorepo/lib-server": "workspace:^",
      "ts-node-dev": "^2.0.0"
    }
  }
  ```

- Create tsconfig.json

  ```json
  {
    "extends": "../../tsconfig.base.json",
    "include": ["src/**/*"],
    "exclude": [
      "node_modules"
    ],  
    "compilerOptions": {
      "rootDir": "src",
      "outDir": "../../dist/project-one",
    }
  }
  ```

## Commands

In the workspace root
  
- Run project-one

  ```shell
  pnpm --filter project-one dev
  ```

- Build project-one

  ```shell
  pnpm --filter project-one build
  ```

- Add lib

  ```shell
  mkdir libs/my-lib
  ```

  > Repeat steps to create app
  > User name @monorepo/lib-[name]
  
- Add lib to project

  ```shell
  pnpm add --workspace --filter project-one @monorepo/lib-[name]
  ```

## Extrass

### Jest

- Install jest

  ```shell
  pnpm add --filter [project-one] --save-dev jest ts-jest @types/jest @jest/globals
  ```

- Add presset in [project-one] to the package.json

  ```json
    "jest": {
      "preset": "ts-jest",
      "testEnvironment": "node"
    }, 
  ```

- Add types to tsconfig.json

  ```json
    "types": [
      "jest",
      "node"
    ]
  ```
