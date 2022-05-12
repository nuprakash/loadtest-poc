/*
 * File: Password.stories.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 28th 2021, 12:08:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Password from './Password';

export default {
  title: 'Password Component',
  component: Password,
  argTypes: {
    flexDirection: {
      control: {
        type: 'select',
        options: ['row', 'row-reverse'],
      },
    },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <Password {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  flexDirection: 'row',
  inputProps: {
    placeholder: 'Placeholder text...',
    maxLength: 10,
    minLength: 5,
    onChange: () => {},
    onClick: () => {
      window.alert('Submit Password');
    },
  },
  iconProps: {
    onClick: () => {},
  },
  withPreview: true,
};
