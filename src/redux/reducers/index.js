/*
 * File: index.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, March 2nd 2021, 9:52:51 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Saturday July 3rd 2021 4:21:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { combineReducers } from 'redux';
import device from './DeviceInfo';

// COMBINED REDUCERS
const reducers = {
  device,
};

export default combineReducers(reducers);
