/*
 * File: DropDown.jsx
 * Project: webapp-cdeals
 * Created Date: Tuesday, March 16th 2021, 11:10:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import watchOuterClicks from '@Hooks/WatchOuterClicks';
import { handleFocusInAndOut } from '@Utils/ADA';
import { bool, node, oneOfType, string } from 'prop-types';
import { useState } from 'react';
import styles from './DropDown.module.scss';
import DropDownContent from './dropDownContent/DropDownContent';
import DropDownContext from './DropDownContext';
import DropDownItem from './dropDownItem/DropDownItem';

const { Provider } = DropDownContext;

/**
 * DropDown Component
 * @param {string} className - Classname to override component styles
 * @param {string|node} children - Child element to render
 * @param {boolen} toggleOnHover - Toggle Dropdown on move over
 * @param {boolen} toggleOnFocus - Toggle Dropdown on focus
 * @param {boolen} toggleOnEscape - Toggle Dropdown on escape
 * @param {boolen} toggleOnBlur - Toggle Dropdown on blur
 * @param {string} role - role added for element type
 * @param {string} tabIndex - tabIndex added for element focus
 *
 * @returns {*}
 * @constructor
 */
const DropDown = ({
  className,
  children,
  toggleOnHover,
  toggleOnFocus,
  toggleOnEscape,
  toggleOnBlur,
  role,
  tabIndex,
  noExpandState,
  ariaHasPopup,
}) => {
  const [collapse, setCollapse] = useState(false);

  const toggleDropDown = () => setCollapse(!collapse);

  const handleOuterClick = () => setCollapse(false);

  const ref = watchOuterClicks(!toggleOnHover && collapse, handleOuterClick);

  const showDropdownOnFocus = () => {
    setCollapse(true);
  };

  const closeDropdownOnBlur = () => {
    setCollapse(false);
  };
  return (
    <Provider value={{ collapse }}>
      <div
        className={`${styles.dropdown} ${className}`}
        ref={ref}
        role={role}
        tabIndex={tabIndex}
        {...(!noExpandState && { 'aria-expanded': collapse })}
        {...(!ariaHasPopup && { 'aria-haspopup': 'listbox' })}
        {...(!toggleOnHover && { onClick: toggleDropDown })}
        {...(toggleOnHover && { onMouseEnter: toggleDropDown })}
        {...(toggleOnHover && { onMouseLeave: toggleDropDown })}
        {...(toggleOnFocus && { onFocus: showDropdownOnFocus })}
        {...(toggleOnBlur && { onBlur: closeDropdownOnBlur })}
        {...(toggleOnEscape && {
          onKeyUp: handleFocusInAndOut.bind(this, [null, () => setCollapse(false)]),
        })}
      >
        {children}
      </div>
    </Provider>
  );
};

// Perform Prop Validation
DropDown.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
  toggleOnHover: bool,
  toggleOnFocus: bool,
  toggleOnEscape: bool,
  toggleOnBlur: bool,
  role: string,
  tabIndex: string,
  ariaHasPopup: bool,
  noExpandState: bool,
};

// Declare default props
DropDown.defaultProps = {
  className: '',
  toggleOnHover: false,
  toggleOnFocus: false,
  toggleOnEscape: false,
  toggleOnBlur: false,
  role: null,
  tabIndex: null,
  ariaHasPopup: false,
  noExpandState: false,
};

DropDown.Content = DropDownContent;
DropDown.Item = DropDownItem;

// Export the component
export default DropDown;
