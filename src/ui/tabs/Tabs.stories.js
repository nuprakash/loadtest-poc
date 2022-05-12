/*
 * File: Tabs.jsx
 * Project: webapp-cdeals
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Tabs from './Tabs';

export const Primary = (args) => <Tabs {...args} />;

Primary.args = {
  className: '',
  tabList: ['LOG IN', 'NEW ACCOUNT'],
  activeTab: 'LOG IN',
  onClick: () => {},
  typography: 'h2',
  children: <h1>Tab Children</h1>,
};

export default {
  title: 'Tabs Component',
  component: Tabs,
};
