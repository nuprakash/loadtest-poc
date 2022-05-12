/*
 * File: RangeSlider.test.js
 * Project: webapp-cdeals
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import RangeSlider from '../RangeSlider';

describe('<RangeSlider />', () => {
  const mockCallBack = jest.fn();

  test('should render Range Slider with props', () => {
    const wrapper = shallow(<RangeSlider max={5} onChange={mockCallBack} initialValue={5} />);

    expect(wrapper.find('.range')).toHaveLength(1);

    expect(wrapper.find('.rangeSliders')).toHaveLength(1);
  });

  test('should trigger mockCallBack function on mouse up', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<RangeSlider max={10} onChange={mockCallBack} initialValue={5} />);
      wrapper.find('input').simulate('mouseup');
    });

    wrapper.update();

    expect(mockCallBack).toHaveBeenCalled();
  });

  test('should not trigger mockCallBack function on slider on mouse down', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<RangeSlider max={10} onChange={mockCallBack} initialValue={5} />);
      wrapper.find('input').simulate('mousedown');
    });

    wrapper.update();

    expect(mockCallBack).not.toHaveBeenCalled();
  });

  test('should trigger mockCallBack function on touch end', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<RangeSlider max={10} onChange={mockCallBack} initialValue={5} />);
      wrapper.find('input').simulate('touchEnd');
    });

    wrapper.update();

    expect(mockCallBack).toHaveBeenCalled();
  });

  test('should not trigger mockCallBack function on slider on touch start', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<RangeSlider max={10} onChange={mockCallBack} initialValue={5} />);
      wrapper.find('input').simulate('touchStart');
    });

    wrapper.update();

    expect(mockCallBack).not.toHaveBeenCalled();
  });

  test('should update slider range on change', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<RangeSlider max={10} onChange={mockCallBack} initialValue={5} />);
    });

    wrapper.find('input').simulate('change', { target: { value: 6 } });
    wrapper.update();

    expect(wrapper.find('input').props().value).toBe(6);
  });
});
