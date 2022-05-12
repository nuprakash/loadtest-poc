/*
 * File: PriceBarRange.jsx
 * Project: webapp-cdeals
 * Created Date: Monday, April 13th 2021, 08:40:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday August 11th 2021 04:00:00 am
 * Modified By: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { number, func, string } from 'prop-types';
import { useState, useEffect } from 'react';
import { Row } from '../layout';
import { validatePrice } from './PriceBarRange.helper';
import styles from './PriceBarRange.module.scss';

/**
 * Price Bar Range Component
 * @param {number} min - Minimum Price Range
 * @param {number} max - Maximum Price Range
 * @param {number} step - Range step for Price bar
 * @param {function} handleOnClick - Handle change on click
 * @param {number} minLength - Minimum character length on input
 * @param {number} maxLength - Maximum character length on input
 * @param {string} state - Range step for Price bar
 * @returns {*}
 * @constructor
 */
const PriceBarRange = ({ min, max, step, handleOnClick, minLength, maxLength, state }) => {
  const [barDetails, setBarDetails] = useState({ minPrice: min, maxPrice: max });
  const [inputValues, setInputValues] = useState({ minPrice: min, maxPrice: max });
  const [error, setError] = useState({});

  useEffect(() => {
    if (state === 'inactive') {
      setBarDetails({ minPrice: min, maxPrice: max });
      setInputValues({ minPrice: min, maxPrice: max });
    }
  }, [state]);

  const onChangeInputValue = ({ target }) => {
    const { name, value } = target;
    let input = parseInt(value);
    const mathType = Math.sign(input);
    input = Object.is(-0, mathType) ? 0 : input;
    const error = validatePrice({ name, input, inputValues, min, max });
    setError(error);
    setInputValues({ ...inputValues, [name]: input });
    if (!Object.keys(error).length) {
      setBarDetails({ ...barDetails, [name]: input });
      handleOnClick({
        min: name === 'minPrice' ? input : barDetails.minPrice,
        max: name === 'maxPrice' ? input : barDetails.maxPrice,
      });
    }
  };

  return (
    <div className={styles.priceBarRange}>
      <div
        className={styles.rangeSliders}
        style={{
          '--barMin': barDetails.minPrice,
          '--barMax': barDetails.maxPrice,
          '--min': min,
          '--max': max,
        }}
      >
        <input
          id="left-slider-thumb"
          step={step}
          type="range"
          name="minPrice"
          className={styles.slider}
          min={min}
          max={max}
          value={barDetails.minPrice}
          onChange={onChangeInputValue}
        />
        <input
          id="right-slider-thumb"
          step={step}
          type="range"
          name="maxPrice"
          className={styles.slider}
          min={min}
          max={max}
          value={barDetails.maxPrice}
          onChange={onChangeInputValue}
        />
      </div>
      <Row className={styles.inputRange}>
        <div className={styles.input}>
          <input
            step={step}
            className={styles.input}
            type="number"
            name="minPrice"
            maxLength={maxLength}
            minLength={minLength}
            value={inputValues.minPrice}
            onChange={onChangeInputValue}
          />
          <label className={styles.dollorLabel}>$</label>
        </div>
        <span className={styles.toText}>to</span>
        <div className={styles.input}>
          <input
            step={step}
            className={styles.input}
            type="number"
            name="maxPrice"
            maxLength={maxLength}
            minLength={minLength}
            value={inputValues.maxPrice}
            onChange={onChangeInputValue}
          />
          <label className={styles.dollorLabel}>$</label>
        </div>
      </Row>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

// Perform Prop Validation
PriceBarRange.propTypes = {
  min: number,
  max: number.isRequired,
  step: number,
  handleOnClick: func.isRequired,
  maxLength: number,
  minLength: number,
  state: string.isRequired,
};

// Declare default props
PriceBarRange.defaultProps = {
  min: 0,
  step: 10,
  maxLength: 6,
  minLength: 1,
};

// export the component
export default PriceBarRange;
