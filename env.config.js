/*
 * File: env.js
 * Project: webapp-cdeals
 * Created Date: Sunday, September 5th 2021, 10:16:38 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday December 15th 2021 12:48:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

var envConfig = {
  log: JSON.parse(process.env.log || '{}'), //must be a string
  ATG_API_BASE_URI: process.env.ATG_API_BASE_URI || 'https://development.roadrunnersports.com/rest',
};

module.exports = envConfig;
