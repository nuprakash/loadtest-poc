/*
 * File: MainMenu.jsx
 * Project: webapp-cdeals
 * Created Date: Friday, February 24th 2021, 1:14:25 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { Fragment, useState } from 'react';
import { array, func } from 'prop-types';
import Accordion from '../../accordion/Accordion';
import Icon from '../../icon/Icon';
import Image from '../../image/Image';
import { Col, Row } from '../../layout';
import Typography from '../../typography/Typography';
import SubMenu from '../subMenu/SubMenu';
import styles from './MainMenu.module.scss';

const hasMenuIcon = ({ icon }) => icon && Object.keys(icon)?.length > 0;

/**
 * MainMenu Component
 * @param {array} menuItems - Array to render Menu Items
 * @param {array} topNavItems - Array to render static menu items
 * @param {func} LinkTag - callback function to handle clicks on links
 */
const MainMenu = ({ menuItems, topNavItems, LinkTag }) => {
  const hasSubMenu = ({ menuItemCategories, menuItemLinks }) =>
    menuItemCategories?.length || menuItemLinks?.length > 0;

  const renderTitle = ({ title, link, ...rest }) => {
    const titleTag = <Typography variant="h3">{title}</Typography>;
    return link && !hasSubMenu(rest) ? <LinkTag href={link}>{titleTag}</LinkTag> : titleTag;
  };

  const [activeIndex, setActiveIndex] = useState(-1);
  const activeSubMenu = (index) => setActiveIndex(index);
  const closeSubMenu = () => setActiveIndex(-1);

  const canShowTopNav = topNavItems?.length && activeIndex === -1;

  return (
    <Row className={styles.menu} flexDirection="column" flexWrap="nowrap">
      {menuItems.length > 0 && (
        <Col>
          <ul>
            {menuItems.map((menuItem, index) => {
              const isMenuHasSubItem = hasSubMenu(menuItem.fields);
              const parentClass = [
                hasMenuIcon(menuItem.fields) ? styles.menuIcon : '',
                activeIndex > -1 ? styles.menuHidden : '',
              ].filter(Boolean);
              return (
                <Fragment key={menuItem.sys?.id}>
                  <li
                    onClick={() => isMenuHasSubItem && activeSubMenu(index)}
                    className={parentClass.join(' ')}
                  >
                    {menuItem.fields?.icon && (
                      <Image
                        src={menuItem.fields?.icon?.fields?.desktop?.fields?.file?.url}
                        alt={menuItem?.fields?.icon?.fields?.desktop?.fields?.title}
                      />
                    )}
                    {renderTitle(menuItem.fields)}
                    {isMenuHasSubItem && (
                      <Icon iconName="caret_right" className={styles.menuChevron} />
                    )}
                  </li>
                  {/* Render sub category links for SEO */}
                  {isMenuHasSubItem && (
                    <Col
                      className={`
                        ${styles.subMenu}
                        ${activeIndex === index ? styles.subMenuActive : ''}
                      `}
                    >
                      <SubMenu
                        subMenuItem={menuItem?.fields}
                        onBack={closeSubMenu}
                        LinkTag={LinkTag}
                      />
                    </Col>
                  )}
                </Fragment>
              );
            })}
          </ul>
        </Col>
      )}
      {canShowTopNav && (
        <Col className={styles.menuNavs}>
          <ul>
            {topNavItems.map((topNavItem) => {
              return (
                <li key={topNavItem?.sys?.id}>
                  {topNavItem?.fields?.menuItemLinks ? (
                    <Accordion className={styles.menuAccordion}>
                      <Accordion.head
                        className={styles.sectionItemAccordionHead}
                        defaultIcon="plus"
                        collapseIcon="minus"
                      >
                        {topNavItem?.fields?.title}
                      </Accordion.head>
                      <Accordion.body>
                        {topNavItem?.fields?.menuItemLinks?.map((menuItem) => (
                          <LinkTag href={menuItem?.fields?.link} key={menuItem?.sys?.id}>
                            {menuItem?.fields?.title}
                          </LinkTag>
                        ))}
                      </Accordion.body>
                    </Accordion>
                  ) : (
                    <LinkTag href={topNavItem?.fields?.link}>{topNavItem?.fields?.title}</LinkTag>
                  )}
                </li>
              );
            })}
          </ul>
        </Col>
      )}
    </Row>
  );
};

//Props validation
MainMenu.propTypes = {
  menuItems: array.isRequired,
  topNavItems: array.isRequired,
  LinkTag: func.isRequired,
};

export default MainMenu;
