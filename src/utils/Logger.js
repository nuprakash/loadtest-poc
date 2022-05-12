/* eslint-disable no-console */
/*
 * File: Logger.js
 * Project: web-analytics
 * Created Date: Saturday, January 2nd 2021, 11:34:47 pm
 * Author: Jebarin <j.jebarin@gmail.com>
 * -----
 * Last Modified: Thursday October 28th 2021 12:26:40 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

// const logConfig = process.env.log;
const logConfig = {
  error: true,
  warn: true,
  info: true,
  log: true,
};
const isDev = process.env.NODE_ENV === 'development';

const formatMessage = (val, trace) => {
  return `${JSON.stringify(val)} ${trace ? JSON.stringify(trace) : ''}`;
};

const logger = {
  error: (val, trace) =>
    (isDev || logConfig?.error) && console.error(`[CDEALS-WEB-APP] ${formatMessage(val)}`, trace),
  warn: (val, trace) =>
    (isDev || logConfig?.warn) && console.warn(`[CDEALS-WEB-APP] ${formatMessage(val, trace)}`),
  info: (val, trace) =>
    (isDev || logConfig?.info) && console.info(`[CDEALS-WEB-APP] ${formatMessage(val, trace)}`),
};

export default logger;
