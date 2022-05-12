/*
 * File: Selectbox.jsx
 * Project: webapp-cdeals
 * Created Date: Tuesday, March 16th 2021, 11:10:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import watchOuterClicks from '@Hooks/WatchOuterClicks';
import { handleFocusInAndOut, handleMoveUpAndDown } from '@Utils/ADA';
import { array, bool, func, string } from 'prop-types';
import { useEffect, useState } from 'react';
import Icon from '../icon/Icon';
import { Col, Row } from '../layout';
import styles from './Selectbox.module.scss';

/**
 * Selectbox Component
 * @param {string} id - Id tag for Selectbox
 * @param {string} name - Name for Selectbox tag
 * @param {string} className - Classname to override component styles
 * @param {string} defaultLabel - Default text to be placed on the Selectbox
 * @param {function} handleOnChange - On change callback
 * @param {array} options - List of items to be displayed
 * @returns {*}
 * @constructor
 */
const Selectbox = ({
  id,
  name,
  defaultLabel,
  handleOnChange,
  options,
  className,
  isFormField,
  ...restProps
}) => {
  const [dropDownList, setSropDownList] = useState();
  const [collapse, setCollapse] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState();

  const classes = [styles.selectbox, styles[`selectbox-${collapse ? 'show' : 'hide'}`], className]
    .join(' ')
    .trim();

  const handleClick = (index) => {
    // reset previously selected option
    dropDownList.forEach((item) => (item.isSelected = false));

    // make clicked option active
    dropDownList[index].isSelected = true;

    setSelectedLabel(dropDownList[index].label);
    handleOnChange?.(dropDownList[index].value);
  };

  const handledOnItemMoveUp = (index, e) => {
    if (index > 0 && index < dropDownList.length) {
      e?.target?.previousSibling?.focus?.();
    }
  };

  const handledOnItemMoveDown = (index, e) => {
    if (index < dropDownList.length - 1) {
      e?.target?.nextSibling?.focus?.();
    }
  };

  const handleOnDropDownKeyUp = (state, e) => {
    setCollapse(state);
    setTimeout(() => {
      e?.target?.lastChild?.firstChild?.focus?.();
    }, 0);
  };

  useEffect(() => {
    setSropDownList(options);
  }, [options, setSropDownList]);

  const handleOuterClick = () => setCollapse(false);

  const ref = watchOuterClicks(collapse, handleOuterClick);

  if (!dropDownList) return null;

  const selectedItem =
    options.filter((item) => item.isSelected === true)[0]?.label ?? selectedLabel;

  const isFormLabel = selectedLabel || selectedItem;

  return (
    <div
      className={classes}
      name={name}
      id={id}
      onClick={() => setCollapse(!collapse)}
      ref={ref}
      tabIndex="0"
      aria-haspopup="listbox"
      onKeyUp={handleFocusInAndOut.bind(this, [
        (e) => handleOnDropDownKeyUp(!collapse, e),
        () => setCollapse(false),
      ])}
      role="button"
      aria-label={`${defaultLabel} listbox`}
      aria-expanded={collapse ? true : false}
      {...restProps}
    >
      <Row className={styles.selectboxHeader} justifyContent="flex-end" alignItems="center">
        <Col>
          {isFormField ? (
            <>
              <span className={isFormLabel ? styles.selectboxLabelActive : ''}>{defaultLabel}</span>
              <span className={isFormLabel ? styles.selectboxFieldActive : ''}>
                {`${selectedItem ?? ''}`.trim()}
              </span>
            </>
          ) : (
            <span>{`${defaultLabel} ${selectedItem ?? ''}`.trim()}</span>
          )}
        </Col>
        <Icon className={styles.selectboxHeaderIcon} iconName="caret_down" />
      </Row>
      <ul
        className={styles.selectboxDropdown}
        role="listbox"
        aria-label={`${defaultLabel}`}
        hidden={!collapse}
        tabIndex={collapse ? -1 : 0}
      >
        {dropDownList?.map((item, index) => {
          return (
            <li
              key={item.label}
              className={`${styles.selectboxDropdownItem} ${
                selectedItem === item.label ? styles.selectboxDropdownItemActive : ''
              }`}
              onClick={() => handleClick(index)}
              onKeyUp={handleMoveUpAndDown.bind(this, [
                (e) => handledOnItemMoveUp(index, e),
                (e) => handledOnItemMoveDown(index, e),
                () => handleClick(index),
              ])}
              tabIndex={collapse ? 0 : -1}
              role="option"
              aria-selected={selectedItem === item.label ? true : false}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Perform Prop Validation
Selectbox.propTypes = {
  id: string,
  name: string,
  className: string,
  defaultLabel: string,
  handleOnChange: func,
  options: array,
  isFormField: bool,
};

// Declare default props
Selectbox.defaultProps = {
  id: null,
  name: null,
  className: '',
  defaultLabel: '',
  handleOnChange: null,
  options: [],
  isFormField: false,
};

// Export the component
export default Selectbox;
