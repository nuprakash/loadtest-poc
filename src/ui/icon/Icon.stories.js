/*
 * File: Icon.stories.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday February 22nd 2021 3:30:16 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Icon from './Icon';

export const Primary = (args) => <Icon {...args} />;

Primary.args = {
  id: 'custom_icon',
  iconName: 'facebook',
  disabled: false,
  onClick: () => {
    window.alert('Submit Function');
  },
};

export default {
  title: 'Icon',
  component: Icon,
};
