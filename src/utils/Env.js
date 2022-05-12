/*
 * File: Env.js
 * Project: webapp-cdeals
 * Created Date: Sunday, September 5th 2021, 11:46:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday September 5th 2021 11:46:05 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * Function to return env variables
 * @param {string} key - key to fetch env variable
 * @returns
 */
const getEnv = (key) => {
  if (typeof window !== 'undefined') {
    try {
      return JSON.parse(window?.RRSApp?.[key]);
    } catch (err) {
      return window?.RRSApp?.[key];
    }
  }

  return process?.env?.[key];
};

export default getEnv;
