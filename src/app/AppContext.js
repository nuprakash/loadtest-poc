/*
 * File: AppContext.js
 * Project: webapp-cdeals
 * Created Date: Monday, August 2nd 2021, 3:27:43 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday August 25th 2021 9:47:17 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

let AppContext = {
  server: {},
};

export const updateAppContext = (payload) => {
  AppContext = { ...AppContext, ...payload };
};

export const useAppContext = () => {
  return { ...AppContext };
};

export const getRequestHeaders = () => {
  return AppContext.server?.request?.headers;
};

export const getRequestCookies = () => {
  return AppContext.server?.request?.cookie ?? '';
};
