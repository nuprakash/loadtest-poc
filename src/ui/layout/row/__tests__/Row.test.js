/*
 * File: Row.test.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Friday February 19th 2021 9:50:51 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import React from 'react';
import { shallow } from 'enzyme';
import Row from '../Row';
const childrens = ['Test1', 'Test2'];
const props = {
  className: 'rowWrapper',
  id: 'rowId',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  textAlign: null,
  alignContent: 'center',
  alignSelf: 'baseline',
  flexWrap: 'wrap',
  columnGap: 5,
  rowGap: 3,
  columnGutter: 3,
};
const ref = React.createRef();
describe('<Row />', () => {
  it('should render Row Component with default props', () => {
    const rowWrapper = shallow(<Row />);

    expect(rowWrapper.find('.flexRow').prop('className')).toContain('text-align-left');
  });

  it('should render Row Component with custom Props', () => {
    const rowWrapper = shallow(
      <Row {...props} forwardRef={ref}>
        {childrens.map((children) => {
          <div>{children}</div>;
        })}
      </Row>
    );

    expect(rowWrapper.find('.flexRow').prop('id')).toBe('rowId');
    expect(rowWrapper.find('.flexRow').prop('className')).toContain('rowWrapper');
    expect(rowWrapper.find('.flexRow').prop('className')).toContain('justify-center');
    expect(rowWrapper.find('.flexRow').prop('className')).toContain('align-items-center');
    expect(rowWrapper.find('.flexRow').prop('className')).toContain('align-content-center');
    expect(rowWrapper.find('.flexRow').prop('className')).toContain('flex-wrap-wrap');
    expect(rowWrapper.find('.flexRow').prop('className')).toContain('column-gap-5');
    expect(rowWrapper.find('.flexRow').prop('className')).toContain('row-gap-3');
  });
});
