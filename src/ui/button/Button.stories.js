/*
 * File: Button.stories.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 12th 2021, 12:08:43 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Icon from '../icon/Icon';
import Button from './Button';

export default {
  title: 'Button Component',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: [
          'rr-navy',
          'rr-skyblue',
          'rr-iceblue',
          'rr-green',
          'white',
          'rr-navy-border',
          'rr-skyblue-border',
          'rr-green-border',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  theme: 'rr-navy',
  children: 'Submit',
  size: 'medium',
  disabled: false,
  isProcessing: false,
  id: 'actionSubmit',
  processingLabel: 'isProcessing',
  onClick: () => {
    window.alert('Submit Function');
  },
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  ...Primary.args,
  size: 'large',
  children: (
    <>
      <span>Account &nbsp;</span>
      <Icon iconName="account" />
    </>
  ),
};

export const AnchorButton = Template.bind({});
AnchorButton.args = {
  theme: 'rr-green',
  size: 'medium',
  children: 'Submit',
  id: 'anchorButton',
  disabled: false,
  hrefProps: {
    href: '/test',
  },
};
