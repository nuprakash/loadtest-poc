/*
 * File: LazyObserver.test.js
 * Project: webapp-cdeals
 * Created Date: Thursday, June 3rd 2021, 3:03:13 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday June 3rd 2021 3:03:13 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow, mount } from 'enzyme';
import LazyObserver from '../LazyObserver';

describe('<LazyObserver>', () => {
  beforeAll(() => {
    window.IntersectionObserver = jest.fn(() => ({
      observe: () => {},
      unobserve: () => {},
    }));
  });

  const mockIntersection = jest.fn();
  const mockIntersectionFallBack = jest.fn();
  let wrapper;

  const Image = () => {
    return <img src="test.jpg" />;
  };

  test('should prepare given image for LazyObserver ', () => {
    wrapper = shallow(
      <LazyObserver>
        <img src="test.png" />
      </LazyObserver>
    );
    const ImageModule = wrapper.find('img');

    expect(ImageModule).toBeDefined();
  });

  test('should return {} if children was null ', () => {
    const children = '';
    wrapper = shallow(<LazyObserver>{children}</LazyObserver>);

    expect(wrapper).toEqual({});
  });

  test('should return children if observer prop value was false ', () => {
    wrapper = mount(
      <LazyObserver observe={false}>
        <img src="test.png" />
      </LazyObserver>
    );

    expect(wrapper.find('img').length > 0).toBeTruthy();
  });

  test('should return component with forward ref props when children was function', () => {
    wrapper = mount(
      <LazyObserver handleOnIntersection={mockIntersection}>
        <Image />
      </LazyObserver>
    );

    expect(wrapper.find('Image').props().forwardRef).toBeTruthy();
  });

  test('should trigger handleOnIntersection  mockCallBack function intersectionobserver threshold met', () => {
    wrapper = mount(
      <LazyObserver handleOnIntersection={mockIntersection}>
        <img src="test.jpg" id="Image" />
      </LazyObserver>
    );
    const imgWrapper = wrapper.getDOMNode('img');
    const mockEntry = {
      isIntersecting: true,
      target: imgWrapper,
    };
    const observerCallback = window.IntersectionObserver.mock.calls[0][0];
    observerCallback([mockEntry]);

    expect(mockIntersection).toHaveBeenCalled();
  });

  test('should trigger handleOnIntersectionFallback  function intersectionobserver threshold was not  met', () => {
    delete window['IntersectionObserver'];
    wrapper = mount(
      <LazyObserver handleOnIntersectionFallback={mockIntersectionFallBack}>
        <Image />
      </LazyObserver>
    );

    expect(mockIntersectionFallBack).toHaveBeenCalled();
  });
});
