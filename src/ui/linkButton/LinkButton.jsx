/*
 * File: LinkButton.jsx
 * Project: webapp-cdeals
 * Created Date: Thursday, July 29th 2021, 4:35:24 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday August 25th 2021 9:47:18 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { func, node, oneOfType, string } from 'prop-types';
import styles from './LinkButton.module.scss';

/**
 * Component - LinkButton
 * @param {function} onClick - Callback on click
 * @param {string|node} children - Child element to render
 * @param {string} className - Custom classname to override styles
 */
const LinkButton = ({ onClick, children, className }) => {
  const handleOnclick = (e) => {
    e?.preventDefault?.();

    // trigger the callback
    onClick?.();

    return false;
  };

  return (
    <a
      href="#"
      role="button"
      className={`${styles.clickableText} ${className}`}
      onClick={handleOnclick}
      tabIndex="0"
    >
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  onClick: func,
  children: oneOfType([string, node]),
  className: string,
};

LinkButton.defaultProps = {
  onClick: null,
  children: null,
  className: '',
};

export default LinkButton;
