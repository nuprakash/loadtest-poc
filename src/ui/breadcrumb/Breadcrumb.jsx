/*
 * File: Breadcrumb.jsx
 * Project: webapp-cdeals
 * Created Date: Tuesday, April 30th 2021, 3:46:05 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { func, string, oneOfType, array } from 'prop-types';
import { Row } from '../layout';
import styles from './Breadcrumb.module.scss';

/**
 * Breadcrumb component
 * @param {string} className - Class to override defaul styles
 * @param {function} LinkTag - Custom Link function to handle click action
 * @param {string} theme - Theme color for the breadcrumb
 * @returns
 */
const Breadcrumb = ({ className, LinkTag, current, theme, breadcrumbLinks }) => {
  const themeColor = styles[`breadcrumb-theme-${theme}`];
  return (
    <Row className={`${styles.breadcrumb} ${themeColor} ${className}`}>
      <LinkTag href="/">Home</LinkTag>
      <span className={styles.breadcrumbLine}></span>
      <span>{current}</span>
      {!current &&
        breadcrumbLinks?.map((breadcrumbLink) => (
          <>
            {breadcrumbLink.url ? (
              <>
                <LinkTag key={breadcrumbLink.name} href={`${breadcrumbLink.url}`}>
                  {breadcrumbLink.name}
                </LinkTag>
                <span className={styles.breadcrumbLine}></span>{' '}
              </>
            ) : (
              <span key={breadcrumbLink.name}>{breadcrumbLink.name}</span>
            )}
          </>
        ))}
    </Row>
  );
};

//default props
Breadcrumb.defaultProps = {
  className: '',
  current: '',
  breadcrumbLinks: [],
  theme: 'dark',
};

//Props validation
Breadcrumb.propTypes = {
  className: string,
  LinkTag: func.isRequired,
  breadcrumbLinks: oneOfType([string, array]),
  theme: string,
  current: string,
};

export default Breadcrumb;
