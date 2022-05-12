/*
 * File: BrandNames.jsx
 * Project: webapp-cdeals
 * Created Date: Tuesday, April 6th 2021, 11:03:54 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { func, object, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { Col, Row } from '../layout';
import Typography from '../typography/Typography';
import { sortBrandNames } from './BrandNames.helper';
import styles from './BrandNames.module.scss';
import AppConfig from '@App/appConfig/AppConfig';

/**
 * BrandNames Component
 * @param {array} brands - Array to render Brand List
 * @param {string} title - title of the Tab
 * @param {string} className - Class to override default styles
 * @param {string} defaultTab - default selected tab
 * @returns
 */
const BrandNames = ({ brands, className, defaultTab, LinkTag, title }) => {
  if (brands && Object.keys(brands).length === 0) return null;

  /**Sorting Brand Names */
  const { alphabeticalBrands, numericBrands } = sortBrandNames(brands);

  /**getting key from sorted brands  */
  const alphabets = Object.keys(alphabeticalBrands);
  const numeric = Object.keys(numericBrands);

  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const section = document.querySelector(`#brand_item_${tabId}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  return (
    <Row className={`${styles.brands} ${className}`}>
      <Typography variant="h2" className={styles.brandsTitle}>
        {title}
      </Typography>
      <Row className={styles.brandsTab}>
        {[defaultTab, ...alphabets, ...numeric].map((tabName, index) => {
          return (
            <Col
              className={`${styles.brandsTabItem} ${
                numeric?.[0]?.includes(tabName) ? styles.brandsTabDivider : ''
              }`}
              key={tabName}
              onClick={() => handleTabClick(tabName)}
              auto
              role="button"
              tabIndex="0"
              aria-label={
                index == 0
                  ? tabName
                  : `${AppConfig.getCMSMessage('brands.brand_name_start')} ${tabName} letter`
              }
            >
              <Typography
                className={activeTab === tabName ? styles.brandsTabItemActive : ''}
                variant="h3"
              >
                {tabName}
              </Typography>
            </Col>
          );
        })}
      </Row>
      <Row className={styles.brandsList} flexDirection="column">
        {[...alphabets, ...numeric]?.map((key) => {
          return (
            <Col
              className={
                activeTab === defaultTab || activeTab === key ? styles.brandsListActive : ''
              }
              key={key}
              auto
              id={`brand_item_${key}`}
            >
              <Typography className={styles.brandsListHeading} variant="h3">
                {key}
              </Typography>
              <ul>
                {brands[key]?.map((brand) => (
                  <li key={brand?.label}>
                    <LinkTag href={`/brands/${brand?.url}`}>{brand?.label}</LinkTag>
                  </li>
                ))}
              </ul>
            </Col>
          );
        })}
      </Row>
    </Row>
  );
};

//default props
BrandNames.defaultProps = {
  brands: {},
  className: '',
  defaultTab: '',
  title: '',
};

//perform props validation
BrandNames.propTypes = {
  brands: object,
  className: string,
  defaultTab: string,
  LinkTag: func.isRequired,
  title: string,
};

export default BrandNames;
