/*
 * File: Object.js
 * Project: webapp-cdeals
 * Created Date: Monday, May 3rd 2021, 4:14:34 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday November 3rd 2021 7:19:20 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import logger from './Logger';
import { isObject } from './Types';

/**
 * Returns a new object with the keys as upper or lower case.
 * NOTE: if as part of the key transformation a key already exists, the value will become an array.
 * @memberOf Utils.Object
 * @type {function}
 * @param {object} object
 * @param {boolean} toUpperCase
 * @returns {object} normalizedObject
 */
export const normalizeKeys = (object, toUpperCase = false) => {
  const normalizedObject = {};
  if (isObject(object)) {
    Object.keys(object).forEach((key) => {
      const normalizedKey = toUpperCase ? key.toUpperCase() : key.toLowerCase();
      if (normalizedObject[normalizedKey]) {
        normalizedObject[normalizedKey] = [normalizedObject[normalizedKey], object[key]];
        logger.warn(
          `Normalized key: ${normalizedKey} already present in source object, value for: "${key}" will be pushed to an array.`,
          object
        );
      } else {
        normalizedObject[normalizedKey] = object[key];
      }
    });
  } else {
    logger.error('Parameter received is not an object', object);
  }
  return normalizedObject;
};

