# MONOREPO

- Install [NVM](https://github.com/nvm-sh/nvm)
- Install version 20.12.2

- Use NVM
  
  ```shell
  nvm use
  ```

- Install [PNPM](https://pnpm.io/)
  
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

- Create libs dir

  ```shell
  mkdir libs
  ````  

- Create apps dir

  ```shell
  mkdir apps
  ````  

- Add apps and libs to pnpm-workspace.yaml

  ```yaml
  packages:
    - 'apps/*'
    - 'libs/**'
  ```  

## New Typescript Project

- Create project
  
  ```shell
  mkdir apps/project-one
  ```

- Init project

  ```shell
  cd apps/project-one && pnpm init && cd ../../
  ```

- Rename project-one name
    "name": "project-one" > "name": "@monorepo/project-one",

- Create src dir

  ```shell
  mkdir src
  ```

- Add typescript

  ```shell
  pnpm add --filter project-one -D typescript @types/node
  ```  

- Add index
  
  ```shell
    echo "console.log('index');" > src/index.ts
  ```

- Add ts-node-dev to local environment
  
  ```shell
  pnpm add --filter project-one -D ts-node-dev 
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

- Add engines in `package.json`

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
    "devDependencies": {
      "@types/node": "^20.12.12",
      "typescript": "^5.4.5",
      "ts-node-dev": "^2.0.0"
    },
  }
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
      "target": "ESNext",
      "module": "CommonJS",
      "sourceMap": true,
      "resolveJsonModule": true,
      "noEmit": false,
      "types": [
        "node"
      ]      
    }
  }
  ```

- Create tsconfig.json

  ```json
  {
    "extends": "./tsconfig.base.json",
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

## New [VITE](https://vitejs.dev/guide/) Project

- Add Vite React Project

  ```shell
  pnpm create vite apps/react-app --template rreact-swc-ts
  ````

- Install

  ```shell
  pnpm i --filter react-app
  ````

- Dev

  ```shell
  pnpm --filter react-app dev
  ````

## New Vite React UI Lib

  ```shell
  pnpm create vite libs/ui/react --template react-swc-ts
  ```

  > Change name to @monorepo/lib-ui-react

  > Remove all inecessary files, and export all components from index.ts
  
### Example src/index.ts

  ```typescript
  export * from "./Menu"
  ```

#### Menu Component

  ```typescript
  import './Menu.css'

  export function Menu() {
    return (
      <>
        <ul>
          <li>Home</li>
        </ul>
      </>
    )
  }
```

#### Use

- Add in project

  ```shell
  pnpm add --workspace --filter react-app @monorepo/lib-ui-react
  ```

- Import and use App.tsx

  ```typescript
    import { useState } from 'react'
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import './App.css'
    import * as UI from "@monorepo/lib-ui-react";

    function App() {
      const [count, setCount] = useState(0)
      return (
        <>
          <UI.Menu />
  ```

## New Typescript Lib

- Add lib

  ```shell
  mkdir libs/lib-test && cd libs/lib-test && pnpm init && ../../
  ```

  > Repeat steps "New Project"
  > Use name @monorepo/lib-[name]
  
- Add lib to project

  ```shell
  pnpm add --workspace --filter project-one @monorepo/lib-[name]
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

- Test project-one

  ```shell
  pnpm --filter project-one test
  ```  

## Extras

### [Jest](https://jestjs.io/) for Typescriopt projects and libs

> For vite projects and libs use vites https://vitest.dev/

- Install jest

  ```shell
  pnpm add --filter [project-name] --save-dev jest ts-jest @types/jest @jest/globals
  ```

- Add types to tsconfig.base.json

  ```json
    "types": [
      "jest",
      "node"
    ]
  ```

- Create jest config in [apps/project-name] or [libs/lib-name]

  ```shell
  cd [apps/project-name|libs/lib-name] \
  && pnpm  ts-jest config:init \
  && mkdir __tests__ && mkdir __mocks__  \
  && ../../
  ```

- Add rest of the config > open jest.config.js and add

  ```javascript
    ...
    testRegex: [".*\\.spec\\.ts$"],
    collectCoverageFrom: ["src/**/*.ts", "!src/**/*.mock.ts"],
    testPathIgnorePatterns: ["src/index.ts"],
    coveragePathIgnorePatterns: ["src/index.ts"],
  ```

- Add test script to the packahe.json in [apps/project-name] or [libs/lib-name]
  
  ```json
    "scripts": {
      ...
      "test": "jest"
    }
  ```  

- Run test

  ```shell
  pnpm --filter [project-name|lib-name] test
  ```

- Run specific test

  ```shel
  pnpm --filter [project-name|lib-name] test -- -t 'describe[name] and it [name]'
  ```

  **Example** `pnpm --filter project-one test -- -t 'UseCase add user successfully'`

- Run coverage

  ```shell
  pnpm --filter [project-name|lib-name] test -- --coverage
  ```

- Run test for all projects

  ```shell
  pnpm -r test 
  ````

- Use parallel when the repo contains many projects

  ```shell
  pnpm --parallel -r test 
  ````

### Debug

- Add .vscode/launch.json

  ```json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "command": "nvm use && pnpm --filter [project-name] dev",
        "name": "Debug project-one",
        "cwd": "${workspaceFolder}",
        "request": "launch",
        "type": "node-terminal"
      },    
    ]
  }
  ```

## husky.

pnpm add -D  husky lint-staged -w
npx husky-init
