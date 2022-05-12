/*
 * File: App.js
 * Project: webapp-cdeals
 * Created Date: Friday, June 25th 2021, 6:45:51 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday October 10th 2021 11:04:25 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * scrollTo
 * @param {children} offset - Offset position to scroll
 * @returns {*}
 * @constructor
 */
export const scrollTo = (offset) => {
  if (typeof window !== 'undefined') {
    const { id, ...rest } = offset;

    const newOffset = id ? { top: document?.getElementById(id)?.offsetTop } : rest;

    window.scrollTo({
      ...newOffset,
      behavior: 'smooth',
    });
  }
};

