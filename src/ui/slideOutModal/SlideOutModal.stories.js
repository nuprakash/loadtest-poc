/*
 * File: SlideOutModal.stories.js
 * Project: webapp-cdeals
 * Created Date: Thursday, March 18th 2021, 7:11:30 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Thursday March 18th 2021 7:11:30 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import SlideOutModal from './SlideOutModal';
import styles from './SlideOutModal.stories.module.scss';

export default {
  title: 'SlideOutModal Component',
  component: SlideOutModal,
};

export const Primary = (args) => <SlideOutModal {...args} />;
Primary.args = {
  isOpen: true,
  withCloseIcon: true,
  children: (
    <>
      <h3 className={styles.storybookModalContent}>Modal in open state</h3>
    </>
  ),
};
