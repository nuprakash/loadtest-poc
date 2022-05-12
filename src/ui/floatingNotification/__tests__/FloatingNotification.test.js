/*
 * File: Toggle.test.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, February 18th 2021, 11:05:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import FloatingNotification from '../FloatingNotification';

describe('<Notification />', () => {
  const props = {
    isActive: false,
    className: 'customClass',
    title: 'VIP 90-Day Fit Promise',
    message: 'Lorem ipsum dolor sit amet adipiscing elit!',
  };

  it('should render component with default props', () => {
    const notification = shallow(<FloatingNotification />);

    expect(notification.find('.notification-show').length > 0).toBe(true);
  });

  it('should render component with custom props', () => {
    const notification = shallow(<FloatingNotification {...props} />);

    expect(notification.find('.notification-hide').length > 0).toBe(true);
    expect(notification.find('.customClass').length > 0).toBe(true);
    expect(notification.find('.title').children().text()).toBe('VIP 90-Day Fit Promise');
  });

  it('Should close notification', () => {
    const notification = shallow(<FloatingNotification {...props} isActive={true} />);

    expect(notification.find('div[className*="notification"]').hasClass(/show/)).toBe(true);

    notification.find('Icon').last().simulate('click');

    expect(notification.find('div[className*="notification"]').hasClass(/hide/)).toBe(true);
  });
});
