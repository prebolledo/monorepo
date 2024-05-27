const appName = require('./package.json').name.split('@monorepo/').pop();

export default {
  verbose: true,
  displayName: appName,   
  rootDir: "./",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.mock.ts",
    "!src/**/*.spec.ts",    
  ], 
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testMatch: [
    '**/?(*.)+(spec|test).ts',
  ],  
  moduleFileExtensions: ["ts", "js"],
  preset: 'ts-jest',  
  testEnvironment: 'node', 
  moduleDirectories: ['node_modules'],  
  coveragePathIgnorePatterns: [
    "src/index.ts"
  ],
  testPathIgnorePatterns: ["src/index.ts"],  
  coverageDirectory: `../../coverage/apps/${appName}`
};