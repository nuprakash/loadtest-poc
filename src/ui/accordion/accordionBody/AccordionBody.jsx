/*
 * File: AccordionBody.jsx
 * Project: webapp-cdeals
 * Created Date: Friday, March 12th 2021, 9:36:57 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Friday March 26th 2021 8:58:12 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { node, oneOfType, string } from 'prop-types';
import { useContext } from 'react';
import { Row } from '../../layout';
import accordionContext from '../AccordionContext';
import styles from './AccordionBody.module.scss';

/**
 * Accordion Body Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @param {string} id - Id to override styles
 * @returns {*}
 * @constructor
 */
const AccordionBody = ({ children, className, id }) => {
  const { collapse } = useContext(accordionContext);
  const collapseClass = collapse ? styles.bodyShow : '';

  return (
    <Row flexDirection="column" className={`${styles.body} ${collapseClass} ${className}`} id={id}>
      {children}
    </Row>
  );
};

AccordionBody.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
  id: string,
};

AccordionBody.defaultProps = {
  className: '',
  id: '',
};

export default AccordionBody;
