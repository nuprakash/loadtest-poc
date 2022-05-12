/*
 * File: Breadcrumb.stories.js
 * Project: webapp-cdeals
 * Created Date: Wednesday, May 26th 2021, 1:44:29 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday May 26th 2021 1:44:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Breadcrumb from './Breadcrumb';
import LinkTag from '@Components/linkTag/LinkTag';

export default {
  title: 'Breadcrumb Component',
  component: Breadcrumb,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['dark', 'white'],
      },
    },
  },
};

export const primary = (args) => <Breadcrumb {...args} />;

primary.args = {
  theme: 'dark',
  current: 'Category',
  LinkTag: LinkTag,
};
