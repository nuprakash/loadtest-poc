/*
 * File: manager.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 12th 2021, 12:19:05 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday January 12th 2021 12:19:05 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { addons } from '@storybook/addons';
import cdealsTheme from './cdealsTheme';

addons.setConfig({
  theme: cdealsTheme,
});
