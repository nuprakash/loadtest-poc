#!/usr/bin/env node
/* eslint-disable no-console */
/*
 * File: build.js
 * Project: webapp-cdeals
 * Created Date: Saturday, October 9th 2021, 1:56:44 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday October 10th 2021 11:04:54 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

const execSh = require('exec-sh').promise;
(async function main() {
  // deleting existing dist folder
  await runCmd('rm -rf serverless/dist');

  // create a dist folder
  await runCmd('mkdir -p serverless/dist');

  // copy build output from .next to dist folder
  await runCmd('cp -r .next/serverless/* serverless/dist/');
  await runCmd('cp -r .next/routes-manifest.json serverless/dist/');

  await runCmd('npm ci --prefix serverless/');

  async function runCmd(cmd) {
    console.log('\n' + cmd);
    await execSh(cmd);
  }
})();
