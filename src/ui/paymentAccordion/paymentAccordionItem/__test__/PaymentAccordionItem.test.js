/*
 * File: PaymentAccordionItem.test.js
 * Project: webapp-cdeals
 * Created Date: Thursday, 8th July 2021 7:30:29 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday July 22nd 2021 12:45:55 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import PaymentAccordion from '@UI/paymentAccordion/PaymentAccordion';
import PaymentAccordionItem from '@UI/paymentAccordion/paymentAccordionItem/PaymentAccordionItem';
import { shallow } from 'enzyme';

describe('<PaymentAccordionItem/>', () => {
  test('should render with childern', () => {
    const wrapper = shallow(
      <PaymentAccordionItem>
        <PaymentAccordion.item.head>credit card</PaymentAccordion.item.head>
        <PaymentAccordion.item.body>Visa</PaymentAccordion.item.body>
      </PaymentAccordionItem>
    );

    expect(wrapper.find('PaymentAccordionHead').children().text()).toBe('credit card');
    expect(wrapper.find('PaymentAccordionBody').children().text()).toBe('Visa');
  });
});
