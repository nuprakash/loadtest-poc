/*
 * File: ColorSlider.jsx
 * Project: webapp-cdeals
 * Created Date: Wednesday, August 4th 2021, 8:26:28 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday August 4th 2021 8:26:28 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Icon from '@UI/icon/Icon';
import { node, number, oneOfType, string } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { Col, Row } from '../layout';
import styles from './ColorSlider.module.scss';

/**
 * Slider Component
 * @param {node} children - Slides to scroll
 * @param {number} itemsToScroll - Items to move by
 * @param {string} className - Custom class to override styles
 * @returns
 */
const Slider = ({ children, itemsToScroll, className }) => {
  let ro = null;
  const sliderInnerNode = useRef();

  // component states
  const [sliderWrapperOffset, setSliderWrapperOffset] = useState({});
  const [left, setLeft] = useState(0);

  const initResizeObserver = () => {
    ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === sliderInnerNode?.current) {
          window.requestAnimationFrame(() => {
            setSliderWrapperOffset({
              // get original slider wrapper width for future calculations
              width: entry?.target?.parentNode?.parentNode?.offsetWidth,
              height: entry?.contentRect?.height, // set slider inner height to slider wrapper
            });
            // reset slider on page resize
            setLeft(0);
          });
        }
      }
    });

    // listen for changes in slider inner row
    sliderInnerNode?.current && ro?.observe(sliderInnerNode?.current);
  };

  useEffect(() => {
    // Init listening to slider offset changes
    initResizeObserver();

    return () => {
      ro?.disconnect();
    };
  }, []);

  // Returns total number of slides
  const getTotalSlides = () => children?.length ?? 0;

  // Returns each slide item width
  const getSliderItemWidth = () => parseInt(sliderInnerNode?.current?.childNodes?.[0]?.offsetWidth);

  // Returns total width required for slider
  const getSliderTotalWidth = () => getTotalSlides() * getSliderItemWidth();

  // Returns visible area(slider contianer width)
  const getVisibleArea = () => sliderWrapperOffset.width;

  // Returns already scrolled left offset
  const getSliderScrolledOffset = () => left;

  // Returns pending/hidden offset
  const getSliderPendingOffset = () =>
    getSliderTotalWidth() - (getSliderScrolledOffset() + getVisibleArea());

  // Function to handle previous button operations
  const prev = () => {
    const prevOffset = left - getSliderItemWidth() * itemsToScroll;
    setLeft(prevOffset > 0 ? prevOffset : 0);
  };

  // Function to handle next button operations
  const next = () => {
    const pendingOffset = getSliderPendingOffset();
    if (pendingOffset > 0) {
      const nextOffset = getSliderItemWidth() * itemsToScroll;
      setLeft(left + (pendingOffset < nextOffset ? pendingOffset : nextOffset));
    }
  };

  // Decides when to show/hide next arrow button
  const showRightArrow = () => getTotalSlides() > 1 && getSliderPendingOffset() > 0;

  const isSlideVisible = (elemIndex) => {
    const currentElem = sliderInnerNode.current?.children?.[elemIndex];
    const currentPosition = currentElem?.offsetLeft + currentElem?.offsetWidth;
    if (
      currentPosition - getSliderScrolledOffset() > 0 &&
      currentElem?.offsetLeft <= getSliderScrolledOffset() + getVisibleArea()
    ) {
      return true;
    }

    return false;
  };

  const mainItemWidth = getSliderItemWidth() * itemsToScroll;

  // Debugger Logs for development
  // console.log('---------********************----------');
  // console.log(`total slides - ${getTotalSlides()}`);
  // console.log(`slider item width - ${getSliderItemWidth()}`);
  // console.log(`slider total width - ${getSliderTotalWidth()}`);
  // console.log(`slider wrapper width/visible area - ${getVisibleArea()}`);
  // console.log(`slider scrolled offset - ${getSliderScrolledOffset()}`);
  // console.log(`slider pending offset to scroll (total - scrolled) - ${getSliderPendingOffset()}`);

  return (
    <Row className={styles.slider} alignItems="center">
      <Icon
        iconName="caret_left_color"
        onClick={() => left > 0 && prev()}
        className={`${styles.sliderArrowLeft} ${left <= 0 ? styles.sliderArrowLeftDisabled : ''}`}
      ></Icon>

      <Row className={styles.sliderMain} style={{ width: mainItemWidth }}>
        <Row
          className={styles.sliderInner}
          forwardRef={sliderInnerNode}
          flexWrap="nowrap"
          style={{ transform: `translate(-${left}px, 0px)` }}
        >
          {React.Children.map(children, (Child, i) => {
            return (
              <Col
                key={i}
                className={`${styles.sliderItem} ${
                  isSlideVisible(i) ? styles.sliderItemVisible : ''
                } ${className} `}
                noflex
              >
                <Child.type {...Child.props} />
              </Col>
            );
          })}
        </Row>
      </Row>

      <Icon
        iconName="caret_right_color"
        onClick={() => showRightArrow() && next()}
        className={`${styles.sliderArrowRight} ${
          !showRightArrow() ? styles.sliderArrowRightDisabled : ''
        }`}
      ></Icon>
    </Row>
  );
};

Slider.propTypes = {
  children: oneOfType([string, node]),
  itemsToScroll: number,
  className: string,
};

Slider.defaultProps = {
  children: null,
  itemsToScroll: 1,
  className: '',
};

export default Slider;
