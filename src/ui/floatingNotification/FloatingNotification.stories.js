/*
 * File: FloatingNotification.stories.js
 * Project: webapp-cdeals
 * Created Date: Monday, April 5th 2021, 08:40:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import FloatingNotification from './FloatingNotification';
import styles from './FloatingNotification.stories.module.scss';

export default {
  title: 'Floating Notification Component',
  component: FloatingNotification,
};

const Template = (args) => <FloatingNotification {...args} />;

export const Notification = Template.bind({});
Notification.args = {
  ...Notification.args,
  title: 'VIP 90-Day Fit Promise',
  message: 'Lorem ipsum dolor sit amet adipiscing elit!',
  className: styles.notification,
  isActive: true,
};
