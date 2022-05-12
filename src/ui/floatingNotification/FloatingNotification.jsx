/*
 * File: FloatingNotification.jsx
 * Project: webapp-cdeals
 * Created Date: Monday, April 05th 2021, 08:17:19 am
 * Author: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { bool, string, object, oneOfType, array } from 'prop-types';
import { useState } from 'react';
import Icon from '../icon/Icon';
import { Row, Col } from '../layout';
import Typography from '../typography/Typography';
import styles from './FloatingNotification.module.scss';

/**
 * Floating Notification Component
 * @param {string} className - Class to override styles
 * @param {boolean} isMobile - Mobile screen indicator
 * @param {string} badge - Text badge
 * @param {boolean} isActive - Hide/Show Floating Notification
 * @param {string} title - Notification title
 * @param {string} message - Notification message
 * @returns {*}
 * @constructor
 */
const FloatingNotification = ({ className, isActive, title, message, iconProps }) => {
  const [active, setActive] = useState(isActive);

  const classGroup = [
    styles.notification,
    styles['notification-desktop'],
    styles[`notification-${active ? 'show' : 'hide'}`],
    className,
  ]
    .join(' ')
    .trim();

  const containerClasses = [
    styles['notificationContainer'],
    styles[`notifications-${active ? '' : 'hide'}`],
  ]
    .join(' ')
    .trim();

  return (
    <Row justifyContent="flex-end" className={containerClasses}>
      <div className={classGroup}>
        <Row columnGap={10}>
          <Col xs={2} className={styles.notificationIcons}>
            <Icon className={styles.notificationIcon} iconName="90_days_icon" {...iconProps} />
          </Col>
          <Col xs={10} className={styles.content}>
            <Row justifyContent="space-between">
              <Typography className={styles.title} variant="h4">
                {title}
              </Typography>
              <Icon
                iconName="close_circle"
                className={styles.notificationClose}
                onClick={() => setActive(!active)}
              />
            </Row>
            <span className={styles.message}>{message}</span>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

// Perform Prop Validation
FloatingNotification.propTypes = {
  className: string,
  isActive: bool,
  title: string,
  message: oneOfType([string, array]),
  withIcon: bool,
  iconProps: object,
};

// Declare default props
FloatingNotification.defaultProps = {
  className: '',
  isActive: true,
  title: '',
  message: [],
  iconProps: {},
};

// export the component
export default FloatingNotification;
