/*
 * File: DropDown.stories.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, March 12th 2021, 11:20:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { Col } from '../layout';
import DropDown from './DropDown';

export default {
  title: 'DropDown Component',
  component: DropDown,
};

// We create a “template” of how args map to rendering
const Template = (args) => {
  return (
    <Col md={2}>
      <DropDown {...args} />
    </Col>
  );
};

// Each story then reuses that template
export const Priimary = Template.bind({});
Priimary.args = {
  toggleOnHover: true,
  toggleOnFocus: true,
  toggleOnEscape: true,
  toggleOnBlur: false,
  role: 'button',
  tabIndex: '-1',
  children: (
    <>
      <DropDown.Content>
        <DropDown.Item>High to Low</DropDown.Item>
        <DropDown.Item>Low to High</DropDown.Item>
      </DropDown.Content>
      Popularity
    </>
  ),
};
