/*
 * File: PaymentAccordionItem.jsx
 * Project: webapp-cdeals
 * Created Date: Thursday, 8th July 2021 5:25:07 pm
 * Author: Mouni Nagarajan <mouni.nagarajan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday July 29th 2021 9:11:08 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Accordion from '@UI/accordion/Accordion';
import { node, number, oneOfType, string } from 'prop-types';
import { useContext } from 'react';
import PaymentAccordionContext from '../PaymentAccordionContext';
import styles from './PaymentAccordionItem.module.scss';

/**
 * PaymentAccordionItem Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @param {string} id - unique key to represent each Accodrion
 * @returns {*}
 * @constructor
 */

const PaymentAccordionItem = ({ className, children, id }) => {
  const { handleClick, activeAccId } = useContext(PaymentAccordionContext);
  const classes = [styles.item, className].join(' ').trim();

  return (
    <Accordion
      className={classes}
      collapsed={id === activeAccId}
      callbackOnOpen={() => handleClick(id)}
    >
      {children}
    </Accordion>
  );
};

PaymentAccordionItem.propTypes = {
  children: oneOfType([string, node]).isRequired,
  id: oneOfType([string, number]),
  className: string,
};

PaymentAccordionItem.defaultProps = {
  id: null,
  className: '',
};

export default PaymentAccordionItem;
