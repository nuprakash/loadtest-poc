/*
 * File: RangeSlider.jsx
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
import Typography from '@UI/typography/Typography';
import { number, func } from 'prop-types';
import { useState, useEffect } from 'react';
import { Row } from '../layout';
import styles from './RangeSlider.module.scss';

/**
 * RangeSlider Component
 * @param {number} min - Minimum Price Range
 * @param {number} max - Maximum Price Range
 * @param {number} step - Range step for Price bar
 * @param {function} onChange - Handle change on click
 * @param {number} initialValue - Range step for Price bar
 * @returns {*}
 * @constructor
 */
const RangeSlider = ({ min, max, step, onChange, initialValue }) => {
  const [range, setRange] = useState(0);
  const [mouseState, setMouseState] = useState(null);

  useEffect(() => {
    setRange(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (mouseState === 'up') {
      onChange(range);
    }
  }, [mouseState]);

  return (
    <Row className={styles.range} justifyContent="space-between">
      <Typography variant="small">${`${min}`}</Typography>
      <div
        className={styles.rangeSliders}
        style={{
          '--barMin': min,
          '--barMax': max,
          '--min': min,
          '--max': max,
        }}
      >
        <input
          id="range-slider-thumb"
          step={step}
          type="range"
          name="maxPrice"
          className={styles.slider}
          min={min}
          max={max}
          value={range}
          onChange={(e) => setRange(e?.target?.value)}
          onMouseDown={() => setMouseState('down')}
          onMouseUp={() => setMouseState('up')}
          onTouchEnd={() => setMouseState('up')}
          onTouchStart={() => setMouseState('down')}
        />
      </div>
      <Typography variant="small">${`${max}`}</Typography>
    </Row>
  );
};

RangeSlider.propTypes = {
  min: number,
  max: number.isRequired,
  step: number,
  onChange: func.isRequired,
  initialValue: number.isRequired,
};

RangeSlider.defaultProps = {
  min: 0,
  step: 5,
};

export default RangeSlider;
