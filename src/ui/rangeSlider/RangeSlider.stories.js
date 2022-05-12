/*
 * File: RangeSlider.stories.js
 * Project: webapp-cdeals
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import RangeSlider from './RangeSlider';

export default {
  title: 'RangeSlider Component',
  component: RangeSlider,
};

const Template = (args) => <RangeSlider {...args} />;

export const Slider = Template.bind({});

Slider.args = {
  max: 20,
  min: 0,
  step: 1,
  initialValue: 5,
  onChange: () => {},
};
