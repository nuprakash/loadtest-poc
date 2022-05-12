/*
 * File: Typography.test.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday March 11th 2021 6:30:16 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import React from 'react';
import { shallow } from 'enzyme';
import Typography from '../Typography';

let mockCallBack = jest.fn();
const typographyProps = {
  variant: 'h2',
  className: 'typography-container',
  id: 'typography',
  onclick: mockCallBack,
  theme: 'warning',
  children: <p>Test</p>,
};
const ref = React.createRef();

describe('<Typography />', () => {
  test('should render component with default props', () => {
    const typographyWrapper = shallow(<Typography />);

    expect(typographyWrapper.find('.tag_h1').length > 0).toBeTruthy();
  });

  test('should render component with custom props', () => {
    const typographyWrapper = shallow(<Typography {...typographyProps} forwardRef={ref} />);

    expect(typographyWrapper.find('.tag_h2').length > 0).toBeTruthy();
    expect(typographyWrapper.find('.tag_h2').prop('className')).toContain('typography-container');
    expect(typographyWrapper.find('.tag_h2').prop('className')).toContain('theme-warning');
    expect(typographyWrapper.find('.tag_h2').prop('id')).toBe('typography');
    expect(typographyWrapper.find('.tag_h2').children().text()).toBe('Test');
  });
});
