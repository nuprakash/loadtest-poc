/*
 * File: TextArea.jsx
 * Project: webapp-cdeals
 * Created Date: Monday, January 12th 2021, 11:17:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { func, number, string } from 'prop-types';
import { Row } from '@UI/layout';
import styles from './TextArea.module.scss';

/**
 * TextArea Component
 * @param {string} className - Class name to override styles of Textarea
 * @param {number} cols - Number of columns to be expanded for Textarea
 * @param {string} id - Textarea tag id
 * @param {number} minLength - Minimum length for input
 * @param {number} maxLength - Maximum length for input
 * @param {string} name - Textarea tag name
 * @param {function} onBlur - On blur callback after the user typed
 * @param {function} onChange - On change callback while user is typing
 * @param {string} placeholder - Placeholder text
 * @param {number} rows - Number of rows to be expanded for Textarea
 * @returns {*}
 * @constructor
 */
const TextArea = ({
  className,
  cols,
  id,
  minLength,
  maxLength,
  name,
  onChange,
  onBlur,
  placeholder,
  rows,
}) => {
  const handleOnChange = ({ target }) => onChange?.(target?.value);

  const handleBlur = ({ target }) => onBlur?.(target);

  return (
    <Row className={className}>
      <textarea
        className={styles.textarea}
        id={id}
        cols={cols}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        onBlur={handleBlur}
        onChange={handleOnChange}
        placeholder={placeholder}
        rows={rows}
      />
    </Row>
  );
};

// Perform Prop Validation
TextArea.propTypes = {
  className: string,
  cols: number,
  id: string,
  minLength: number,
  maxLength: number,
  name: string,
  onBlur: func,
  onChange: func,
  placeholder: string,
  rows: number,
};

// Declare default props
TextArea.defaultProps = {
  className: '',
  cols: 6,
  id: null,
  minLength: 0,
  maxLength: 250,
  name: null,
  onBlur: null,
  onChange: null,
  placeholder: '',
  rows: 6,
};

// Export the component
export default TextArea;
