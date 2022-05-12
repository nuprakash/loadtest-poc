/*
 * File: InputGroup.jsx
 * Project: webapp-cdeals
 * Created Date: Monday, January 12th 2021, 11:17:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday October 20th 2021 8:22:49 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { oneOf, shape, string } from 'prop-types';
import { useEffect, useState } from 'react';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import { Row } from '../layout';
import styles from './InputGroup.module.scss';

/**
 * Input Group
 * @param {object} inputProps - Props for input component
 * @param {object} btnProps - Props for button component
 * @param {object} iconProps - Props for icon component
 * @param {string} flexDirection - Icon location (row or row-reverse)
 * @param {string} className - Custom classname to control styles
 * @returns {*}
 * @constructor
 */
const InputGroup = ({ iconProps, btnProps, flexDirection, className,inputGroupClassName, inputProps }) => {
  const [textValue, setTextValue] = useState(inputProps.value);
  const prefix = iconProps !== null ? 'icon' : 'button';

  const contClasses = [
    styles.inputGroup,
    styles[`input-group-${prefix}`],
    styles[`input-group-${prefix}-${flexDirection}`],
    className,
    inputGroupClassName
  ]
    .join(' ')
    .trim();
  const inputClass = [styles.inputGroupBox, inputProps.className ?? ''].join(' ').trim();

  const handleChange = (event) => {
    inputProps?.onChange?.(event?.target?.value);
    setTextValue(event?.target?.value);
  };

  const handleClick = () => {
    iconProps?.onClick?.(textValue);
    btnProps?.onClick?.(textValue);
  };

  const renderChildren = () => {
    if (iconProps) {
      return <Icon {...iconProps} onClick={handleClick} />;
    } else {
      return (
        <Button {...btnProps} onClick={handleClick}>
          {btnProps.btnlabel}
        </Button>
      );
    }
  };

  useEffect(() => {
    setTextValue(inputProps.value);
  }, [inputProps.value]);

  return (
    <Row
      flexDirection={flexDirection}
      alignItems="flex-start"
      flexWrap="nowrap"
      className={contClasses}
    >
      <Input {...inputProps} value={textValue} className={inputClass} onChange={handleChange} />
      {renderChildren()}
    </Row>
  );
};

// Perform Prop Validation
InputGroup.propTypes = {
  flexDirection: oneOf(['row', 'row-reverse']),
  btnProps: shape({
    btnlabel: string,
  }),
  iconProps: shape({}),
  inputProps: shape({}),
  className: string,
};

// Declare default props
InputGroup.defaultProps = {
  flexDirection: 'row',
  btnProps: {
    btnlabel: 'Submit',
  },
  iconProps: null,
  inputProps: {},
  className: '',
};

// Export the component
export default InputGroup;
