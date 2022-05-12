/*
 * File: PriceBarRange.test.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, April 14th 2021, 11:05:05 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { mount } from 'enzyme';
import PriceBarRange from '../PriceBarRange';

describe('<PriceBarRange />', () => {
  let priceBar;
  const eventMinP = {
    target: {
      name: 'minPrice',
      value: 500,
    },
  };
  const eventMaxP = {
    target: {
      name: 'maxPrice',
      value: 2000,
    },
  };
  const mockCallBack = jest.fn();

  beforeEach(() => {
    priceBar = mount(<PriceBarRange min={0} max={2500} step={500} handleOnClick={mockCallBack} />);
  });

  it('Should trigger callback onChange event (Bar range)', () => {
    priceBar.find('#left-slider-thumb').simulate('change', eventMinP);
    priceBar.find('#right-slider-thumb').simulate('change', eventMaxP);
    expect(priceBar.find('#left-slider-thumb').prop('value')).toEqual(500);
    expect(priceBar.find('#right-slider-thumb').prop('value')).toEqual(2000);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('Should trigger callback onChange event (Input)', () => {
    priceBar.find('input[name="minPrice"]').at(0).simulate('change', eventMinP);
    priceBar.find('input[name="maxPrice"]').at(0).simulate('change', eventMaxP);
    expect(priceBar.find('input[name="minPrice"]').at(0).prop('value')).toEqual(500);
    expect(priceBar.find('input[name="maxPrice"]').at(0).prop('value')).toEqual(2000);
  });

  it('should change min and max price when state is inactive', () => {
    priceBar = mount(
      <PriceBarRange
        min={200}
        max={1000}
        step={500}
        handleOnClick={mockCallBack}
        state="inactive"
      />
    );

    expect(priceBar.find('input[name="minPrice"]').at(0).prop('value')).toEqual(200);
    expect(priceBar.find('input[name="maxPrice"]').at(0).prop('value')).toEqual(1000);
  });

  it('should not call mockCallBack when value is -0', () => {
    priceBar = mount(
      <PriceBarRange min={100} max={1000} step={100} handleOnClick={mockCallBack} state="active" />
    );
    priceBar
      .find('input[name="minPrice"]')
      .at(0)
      .simulate('change', {
        target: {
          name: 'minPrice',
          value: '-0',
        },
      });

    expect(mockCallBack).not.toBeCalled();
  });

  it('Should fallback to min and max values', () => {
    priceBar
      .find('input[name="minPrice"]')
      .at(0)
      .simulate('change', {
        target: {
          name: 'minPrice',
          value: -100,
        },
      });
    priceBar
      .find('input[name="maxPrice"]')
      .at(0)
      .simulate('change', {
        target: {
          name: 'maxPrice',
          value: 3000,
        },
      });

    expect(priceBar.find('input[name="minPrice"]').at(0).prop('value')).toEqual(0);
    expect(priceBar.find('input[name="maxPrice"]').at(0).prop('value')).toEqual(2500);
  });

  it('minimum value cant be greater than maximum', () => {
    priceBar = mount(<PriceBarRange min={50} max={1000} step={500} handleOnClick={mockCallBack} />);
    priceBar
      .find('input[name="minPrice"]')
      .at(0)
      .simulate('change', {
        target: {
          name: 'minPrice',
          value: 1000,
        },
      });

    expect(priceBar.find('input[name="minPrice"]').at(0).prop('value')).toEqual(50);
  });

  it('maximum value cant be lesser than minimum', () => {
    priceBar = mount(
      <PriceBarRange min={500} max={1000} step={500} handleOnClick={mockCallBack} />
    );
    priceBar
      .find('input[name="maxPrice"]')
      .at(0)
      .simulate('change', {
        target: {
          name: 'maxPrice',
          value: 100,
        },
      });

    expect(priceBar.find('input[name="minPrice"]').at(0).prop('value')).toEqual(500);
  });

  it('Input value should not be more than 6 digits', () => {
    priceBar = mount(<PriceBarRange min={50} max={1000} step={500} handleOnClick={mockCallBack} />);
    priceBar
      .find('input[name="minPrice"]')
      .at(0)
      .simulate('change', {
        target: {
          name: 'minPrice',
          value: 5000000,
        },
      });
    expect(priceBar.find('input[name="minPrice"]').at(0).prop('value')).toEqual(50);
  });
});
