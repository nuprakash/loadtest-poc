/*
 * File: PaymentAccordionBody.test.js
 * Project: webapp-cdeals
 * Created Date: Thursday, 8th July 2021 7:21:06 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday July 22nd 2021 12:45:55 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import PaymentAccordionBody from '@UI/paymentAccordion/paymentAccordionBody/PaymentAccordionBody';
import { shallow } from 'enzyme';

describe('<PaymentAccordionBody/>', () => {
  test('should render body with children', () => {
    const wrapper = shallow(<PaymentAccordionBody>Visa</PaymentAccordionBody>);

    expect(wrapper.children().text()).toBe('Visa');
  });
});
