/*
 * File: Tiles.jsx
 * Project: webapp-cdeals
 * Created Date: Thursday, March 18th 2021, 2:46:43 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * -------
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { handleFocusInAndOut } from '@Utils/ADA';
import { node, oneOfType, shape, string } from 'prop-types';
import Icon from '../icon/Icon';
import styles from './Tiles.module.scss';

/**
 * Tiles component
 * @param {any} children - Child text node within the Tiles component
 * @param {string} theme - specify valid theme to set background color (eg: theme1 => RR-IceBlue; theme2 => natural)
 * @param {string} className - class to override default styles
 * @returns
 */
const Tiles = ({ iconProps, children, theme, className }) => {
  const classes = [styles.tiles, theme ? styles[`tiles-${theme}`] : '', className].join(' ').trim();

  return (
    <div className={classes}>
      {children}
      {iconProps && (
        <button
          aria-label={iconProps?.ariaLabel}
          onKeyUp={handleFocusInAndOut.bind(this, [iconProps.onClick])}
        >
          <Icon
            iconName="close"
            {...iconProps}
            className={`${styles.tilesIcon} ${iconProps.className ?? ''}`}
          />
        </button>
      )}
    </div>
  );
};

//default Props
Tiles.defaultProps = {
  theme: 'theme1',
  className: '',
  iconProps: null,
  ariaLabel: null,
};

//Perform props validation
Tiles.propTypes = {
  children: oneOfType([string, node]).isRequired,
  theme: string,
  className: string,
  iconProps: shape({}),
  ariaLabel: string,
};

export default Tiles;
