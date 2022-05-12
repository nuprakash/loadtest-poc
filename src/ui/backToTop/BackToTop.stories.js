/*
 * File: Breadcrumb.stories.js
 * Project: webapp-cdeals
 * Created Date: Thursday, June 17th 2021, 1:44:29 am
 * Author: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday June 17th 2021 1:44:29 am
 * Modified By: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import BackToTop from './BackToTop';

export default {
  title: 'BackToTop Component',
  component: BackToTop,
};

export const Primary = (args) => <BackToTop {...args} />;

Primary.args = {
  scrollTop: 500,
};
