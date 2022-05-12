/*
 * File: PaymentAccordionHead.test.js
 * Project: webapp-cdeals
 * Created Date: Thursday, 8th July 2021 7:35:50 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday July 22nd 2021 12:45:55 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import PaymentAccordionHead from '@UI/paymentAccordion/paymentAccordionHead/PaymentAccordionHead';
import { shallow } from 'enzyme';

describe('<PaymentAccordionHead/>', () => {
  test('should render header with children', () => {
    const wrapper = shallow(<PaymentAccordionHead>Credit Card</PaymentAccordionHead>);

    expect(wrapper.children().text()).toBe('Credit Card');
  });
});
