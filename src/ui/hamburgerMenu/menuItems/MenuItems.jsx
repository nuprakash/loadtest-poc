/*
 * File: MenuItems.jsx
 * Project: webapp-cdeals
 * Created Date: Friday, February 24th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { array, func } from 'prop-types';
import { Col } from '../../layout';
import MainMenu from '../mainMenu/MainMenu';
import styles from './MenuItems.module.scss';

/**
 * MenuItems Component
 * @param {array} menuItems - Array to render Menu Items
 * @param {array} topNavItems - Array to render static menu items
 * @param {func} LinkTag - callback function to handle clicks on links
 */
const MenuItems = ({ menuItems, topNavItems, LinkTag }) => (
  <Col className={`${styles.mainMenu} ${styles.mainMenuActive}`}>
    <MainMenu menuItems={menuItems} topNavItems={topNavItems} LinkTag={LinkTag} />
  </Col>
);

//Props validation
MenuItems.propTypes = {
  menuItems: array,
  topNavItems: array,
  LinkTag: func.isRequired,
};

MenuItems.defaultProps = {
  menuItems: [],
  topNavItems: [],
};

export default MenuItems;
