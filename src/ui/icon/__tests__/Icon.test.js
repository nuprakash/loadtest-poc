/*
 * File: Icon.test.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday February 22nd 2021 12:30:38 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { mount } from 'enzyme';
import Icon from '../Icon';
import { waitForComponentToPaint } from '@Utils/Testing';

let mockCallBack = jest.fn();
const iconInput1 = {
  iconName: 'account',
  id: 'icon',
  className: 'icon-container',
  disabled: true,
};

describe('<Icon />', () => {
  it('should render icon component with default props and onclick function', () => {
    const iconWrapper = mount(<Icon iconName="account" onClick={mockCallBack} />);
    waitForComponentToPaint(iconWrapper);

    expect(iconWrapper.find('Icon').prop('iconName')).toBe('account');
    expect(iconWrapper.find('Icon').prop('disabled')).toBe(false);
    expect(iconWrapper.find('Icon').prop('onClick')).toBeTruthy();
  });

  it('should render icon component with custom props', () => {
    const iconWrapper = mount(<Icon {...iconInput1} />);
    waitForComponentToPaint(iconWrapper);

    expect(iconWrapper.find('Icon').prop('id')).toBe('icon');
    expect(iconWrapper.find('Icon').prop('className')).toBe('icon-container');
    expect(iconWrapper.find('Icon').prop('disabled')).toBe(true);
  });

  it('should render component unmounts', () => {
    const iconWrapper = mount(<Icon iconName="account" />);
    waitForComponentToPaint(iconWrapper);

    expect(iconWrapper.find('Icon').length).toBe(1);

    iconWrapper.unmount();

    expect(iconWrapper.find('Icon').length).toBe(0);
  });
});
