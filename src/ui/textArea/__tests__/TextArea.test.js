/*
 * File: TextArea.test.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, July 09th 2021, 09:05:05 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { mount } from 'enzyme';
import TextArea from '../TextArea';

describe('<TextArea />', () => {
  const event = { target: { name: 'name', value: 'Test' } };

  const mockOnChangeCallBack = jest.fn();
  const mockOnBlurCallBack = jest.fn();

  let textAreaWrapper;

  const props = {
    className: 'textAreaContainer',
    cols: 7,
    rows: 7,
    id: 'textArea',
    name: 'textArea',
    placeholder: 'Enter the Value',
  };

  beforeAll(() => {
    textAreaWrapper = mount(<TextArea />);
  });

  it('Should render TextArea Component with default Props', () => {
    expect(textAreaWrapper.find('.textarea').prop('cols')).toBe(6);

    expect(textAreaWrapper.find('.textarea').prop('rows')).toBe(6);
  });

  it('Should render TextArea Component with custom Props', () => {
    textAreaWrapper.setProps({ ...props });

    expect(textAreaWrapper.find('.textAreaContainer').length > 0).toBeTruthy();

    expect(textAreaWrapper.find('.textarea').prop('cols')).toBe(7);

    expect(textAreaWrapper.find('.textarea').prop('rows')).toBe(7);

    expect(textAreaWrapper.find('.textarea').prop('id')).toBe('textArea');

    expect(textAreaWrapper.find('.textarea').prop('name')).toBe('textArea');

    expect(textAreaWrapper.find('.textarea').prop('placeholder')).toBe('Enter the Value');
  });

  it('Should trigger a callback on change', () => {
    textAreaWrapper.setProps({ onChange: mockOnChangeCallBack });
    textAreaWrapper.find('textarea').simulate('change', event);

    expect(mockOnChangeCallBack).toHaveBeenCalledWith('Test');
  });

  it('Should trigger a callback on Blur', () => {
    textAreaWrapper.setProps({ onBlur: mockOnBlurCallBack });
    textAreaWrapper.find('textarea').simulate('blur');

    expect(mockOnBlurCallBack).toHaveBeenCalled();
  });
});
