/*
 * File: Button.stories.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 12th 2021, 12:08:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import PriceBarRange from './PriceBarRange.jsx';
import { Col } from '../layout';

export default {
  title: 'Price bar Component',
  component: PriceBarRange,
  argTypes: {
    state: {
      control: {
        type: 'select',
        options: ['active', 'inactive'],
      },
    },
  },
};

const Template = (args) => {
  return (
    <Col md={2}>
      <PriceBarRange {...args} />
    </Col>
  );
};

export const PriceBar = Template.bind({});
PriceBar.args = {
  minLength: 1,
  maxLength: 3,
  min: 100,
  max: 10000,
  step: 100,
  state: 'active',
  handleOnClick: () => {},
};
