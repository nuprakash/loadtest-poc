/*
 * File: Button.js
 * Project: webapp-cdeals
 * Created Date: Monday, January 11th 2021, 11:17:19 pm
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday November 18th 2021 9:37:30 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import { bool, func, node, oneOf, oneOfType, string, shape } from 'prop-types';
import styles from './Button.module.scss';

/**
 * Button Component
 * @param {string} id - Id tag for button
 * @param {boolean} isProcessing - Show the spinner when the promise is being resolved
 * @param {string} processingLabel - Alternaive Label to show on loading/processing
 * @param {string} theme - Theme of button, options - ("rr-navy", "rr-skyblue", "rr-iceblue", "rr-green", "white")
 * @param {string} className - Classname to override button styles
 * @param {string} size - Button size
 * @param {boolean} disabled - Disabled state for Button (true or false)
 * @param {funtion} onClick - Handles click callback
 * @param {node} children - Text / Child element
 * @returns {*}
 * @constructor
 */
const Button = ({
  id,
  isProcessing,
  theme,
  className,
  size,
  disabled,
  onClick,
  children,
  action,
  processingLabel,
  hrefProps,
  ...rest
}) => {
  const classes = [styles.btn, styles[`theme-${theme}`], styles[`size-${size}`], className]
    .join(' ')
    .trim();

  return (
    <>
      {hrefProps ? (
        <LinkTag className={classes} {...hrefProps}>
          {children}
        </LinkTag>
      ) : (
        <button
          type={action}
          id={id}
          className={classes}
          disabled={isProcessing || disabled}
          onClick={onClick}
          {...rest}
        >
          {isProcessing && <span className={styles.btnSpinner} />}
          {isProcessing ? processingLabel : children}
        </button>
      )}
    </>
  );
};

// Perform Prop Validation
Button.propTypes = {
  children: oneOfType([string, node]),
  id: string,
  isProcessing: bool,
  className: string,
  disabled: bool,
  theme: oneOf([
    'navy',
    'skyblue',
    'iceblue',
    'green',
    'navy-border',
    'skyblue-border',
    'green-border',
    'vip-red',
    'vip-teal',
    'white',
    'black',
    'alizarin-red',
    'gold',
    'teal',
    'beige',
  ]),
  size: string,
  action: oneOf(['button', 'submit', 'reset']),
  onClick: func,
  processingLabel: string,
  hrefProps: shape({}),
};

// Declare default props
Button.defaultProps = {
  id: null,
  isProcessing: false,
  theme: 'navy',
  className: '',
  size: 'small',
  disabled: false,
  action: 'button',
  onClick: null,
  processingLabel: 'Processing...',
  hrefProps: null,
};

// Export the component
export default Button;
