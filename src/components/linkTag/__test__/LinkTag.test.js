/*
 * File: LinkTag.test.js
 * Project: webapp-cdeals
 * Author: Prakash Raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import LinkTag from '../LinkTag';

describe('<LinkTag />', () => {
  test('should render link element when href is passed', () => {
    const wrapper = shallow(<LinkTag href="/test">Test</LinkTag>);

    expect(wrapper.find('Link')).toHaveLength(1);
  });

  test('should append underline className when underline is true ', () => {
    const wrapper = shallow(
      <LinkTag href="/test" underline={true}>
        Test
      </LinkTag>
    );

    expect(wrapper.find('a').hasClass(/underline/)).toBe(true);
  });

  test('should render anchor tag when href is not passed', () => {
    const wrapper = shallow(<LinkTag>Test</LinkTag>);

    expect(wrapper.find('Link')).toHaveLength(0);

    expect(wrapper.find('a')).toHaveLength(1);
  });
});
