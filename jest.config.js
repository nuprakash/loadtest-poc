/*
 * File: jest.config.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 5th 2021, 11:28:00 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday October 26th 2021 2:49:14 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * Mock timezone set to GMT in Test environment
 */
process.env.TZ = 'GMT';

/**
 * https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/components/**/?(*.)+(snapshot|spec|test).js?(x)',
    '**/helpers/**/?(*.)+(spec|test).js?(x)',
    '**/hooks/**/?(*.)+(spec|test).js?(x)',
    '**/redux/**/?(*.)+(spec|test).js?(x)',
    '**/ui/**/?(*.)+(snapshot|spec|test).js?(x)',
    '**/services/**/?(*.)+(spec|test).js?(x)',
    '**/utils/**/?(*.)+(spec|test).js?(x)',
    '**/libs/**/?(*.)+(spec|test).js?(x)',
  ],

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '**/components/**/*.js?(x)',
    '**/helpers/**/*.js?(x)',
    '**/hooks/**/*.js?(x)',
    '**/redux/**/*.js?(x)',
    '**/ui/**/!(*.stories)*.js?(x)',
    '**/services/**/*.js?(x)',
    '**/utils/**/*.js?(x)',
  ],

  // Paths to ignore coverage
  coveragePathIgnorePatterns: ['redux/actionTypes', 'cms/components'],

  // Coverage threshold limit
  coverageThreshold: {
    global: {
      branches: 56,
      functions: 55,
      lines: 61,
      statements: 61,
    },
  },

  // A map from regular expressions to module names that allow to stub out resources,
  // - like images or styles with a single module.
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/jest/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/jest/styleMock.js',

    '@Mocks/(.*)': '<rootDir>/src/__mocks__/$1',
    '@Assets/(.*)': '<rootDir>/src/assets/$1',
    '@Constants/(.*)': '<rootDir>/src/constants/$1',
    '@UI/(.*)': '<rootDir>/src/ui/$1',
    '@Configs/(.*)': '<rootDir>/src/configs/$1',
    '@Hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@Libs/(.*)': '<rootDir>/src/libs/$1',
    '@Components/(.*)': '<rootDir>/src/components/$1',
    '@Redux/(.*)': '<rootDir>/src/redux/$1',
    '@Services/(.*)': '<rootDir>/src/services/$1',
    '@Utils/(.*)': '<rootDir>/src/utils/$1',
    '@App/(.*)': '<rootDir>/src/app/$1',
    '@Helpers/(.*)': '<rootDir>/src/helpers/$1',
  },

  automock: false,
};
