/*
 * File: Panel.jsx
 * Project: webapp-cdeals
 * Author: Prakashraj <Prakashraj.asaikannan@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Accordion from '@UI/accordion/Accordion';
import PanelHead from '@UI/panel/panelHead/PanelHead';
import PanelBody from '@UI/panel/panelBody/PanelBody';
import { node, string } from 'prop-types';
import styles from './Panel.module.scss';

/**
 * Panel Component
 * @param {children} children - Child Component
 * @param {string} className - Class to override styles
 * @returns {*}
 * @constructor
 */

const Panel = ({ children, className }) => {
  const classes = [styles.panel, className].join(' ').trim();

  return (
    <Accordion collapsed={true} className={classes}>
      {children}
    </Accordion>
  );
};

Panel.Head = PanelHead;
Panel.Body = PanelBody;

export default Panel;

Panel.propTypes = {
  children: node.isRequired,
  className: string,
};

Panel.defaultProps = {
  className: '',
};
