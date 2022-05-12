/*
 * File: Col.test.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Friday February 19th 2021 9:51:14 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Col from '../Col';

describe('<Col />', () => {
  const customProps = {
    id: 'Col',
    className: 'Col-Container',
  };

  const customClassProps = {
    auto: true,
    noflex: true,
    sm: 6,
    alignSelf: 'center',
  };

  it('should render the component with custom props', () => {
    const wrapper = shallow(<Col {...customProps} />);

    expect(wrapper.find('#Col').length > 0).toBeTruthy();
    expect(wrapper.find('.Col-Container').length > 0).toBeTruthy();
  });

  it('should render the component className based on prop value', () => {
    const wrapper = shallow(<Col {...customClassProps} forwardRef={() => {}} />);

    expect(wrapper.find('.col').length > 0).toBeTruthy();
    expect(wrapper.find('.colAuto').length > 0).toBeTruthy();
    expect(wrapper.find('.colNoflex').length > 0).toBeTruthy();
    expect(wrapper.find('.colBreakpoints').length > 0).toBeTruthy();
    expect(wrapper.find('.col-sm-6').length > 0).toBeTruthy();
    expect(wrapper.find('.align-self-center').length > 0).toBeTruthy();
  });

  it('should render the component with children ', () => {
    const wrapper = shallow(<Col>Children</Col>);

    expect(wrapper.find('.col').children().text()).toBe('Children');
  });
});
