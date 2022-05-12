/*
 * File: TextArea.stories.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 12th 2021, 12:08:43 am
 * Author: Nelson <Nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { Col } from '@UI/layout';
import TextArea from './TextArea';

export default {
  title: 'TextArea Component',
  component: TextArea,
};

// We create a “template” of how args map to rendering
const Template = (args) => {
  return (
    <Col sm={4}>
      <TextArea {...args} />
    </Col>
  );
};

// Each story then reuses that template
export const TextAreaField = Template.bind({});
TextAreaField.args = {
  cols: 5,
  label: 'Text area',
  rows: 6,
  maxLength: 50,
  minLength: 0,
  name: 'textArea',
  onBlur: () => {},
  onChange: () => {},
  placeholder: 'Comments',
  id: 'comments',
  className: '',
};
