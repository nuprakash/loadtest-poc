/*
 * File: PaymentAccordion.test.js
 * Project: webapp-cdeals
 * Created Date: Thursday, 8th July 2021 7:13:32 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday July 22nd 2021 12:45:55 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import PaymentAccordion from '@UI/paymentAccordion/PaymentAccordion';
import PaymentAccordionContext from '@UI/paymentAccordion/PaymentAccordionContext';
import { waitForComponentToPaint } from '@Utils/Testing';
import { mount, shallow } from 'enzyme';

describe('<PaymentAccordion/>', () => {
  test('should render childern prop values', () => {
    const wrapper = shallow(
      <PaymentAccordion>
        <PaymentAccordion.item>
          <PaymentAccordion.item.head>credit card</PaymentAccordion.item.head>
          <PaymentAccordion.item.body>Visa</PaymentAccordion.item.body>
        </PaymentAccordion.item>
      </PaymentAccordion>
    );

    expect(wrapper.find('PaymentAccordionHead').children().text()).toBe('credit card');
    expect(wrapper.find('PaymentAccordionBody').children().text()).toBe('Visa');
  });

  test('should trigger callback when when PaymentAccordionHead clicked', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <PaymentAccordionContext.Provider value={{ activeAccId: '1', handleClick: mockCallBack }}>
        <PaymentAccordion callBackOnSelect={mockCallBack}>
          <PaymentAccordion.item>
            <PaymentAccordion.item.head>credit card</PaymentAccordion.item.head>
            <PaymentAccordion.item.body>Visa</PaymentAccordion.item.body>
          </PaymentAccordion.item>
        </PaymentAccordion>
      </PaymentAccordionContext.Provider>
    );
    wrapper.find('PaymentAccordionHead').simulate('click');
    waitForComponentToPaint(wrapper);

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  test('should open PaymentAccordion and colse the other PaymentAccordion on clicking PaymentAccordionHead', () => {
    const mockCallBack = jest.fn();

    const wrapper = mount(
      <PaymentAccordionContext.Provider value={{ activeAccId: 2, handleClick: mockCallBack }}>
        <PaymentAccordion selectedAccordion={2}>
          <PaymentAccordion.item id={1}>
            <PaymentAccordion.item.head>credit card</PaymentAccordion.item.head>
            <PaymentAccordion.item.body>Visa</PaymentAccordion.item.body>
          </PaymentAccordion.item>
          <PaymentAccordion.item id={2}>
            <PaymentAccordion.item.head>Debit Card</PaymentAccordion.item.head>
            <PaymentAccordion.item.body>Master</PaymentAccordion.item.body>
          </PaymentAccordion.item>
        </PaymentAccordion>
      </PaymentAccordionContext.Provider>
    );
    // while clicking the second payment accordion
    wrapper.find('AccordionHead').at(1).simulate('click');
    waitForComponentToPaint(wrapper);

    expect(wrapper.find('Accordion').first().props().collapsed).toBe(false);
    expect(wrapper.find('Accordion').at(1).props().collapsed).toBe(true);

    // while clicking the first payment accordion
    wrapper.find('AccordionHead').first().simulate('click');
    waitForComponentToPaint(wrapper);

    expect(wrapper.find('Accordion').first().props().collapsed).toBe(true);
    expect(wrapper.find('Accordion').at(1).props().collapsed).toBe(false);
  });
});
