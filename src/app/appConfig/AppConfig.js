/*
 * File: AppConfig.js
 * Project: webapp-cdeals
 * Created Date: Sunday, July 18th 2021, 7:29:18 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday November 3rd 2021 8:06:01 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import logger from '@Utils/Logger';
import { normalizeKeys } from '@Utils/Object';
import { isTypeOf } from '@Utils/Types';
import defaultLocale from '../../locales/en-US.json';
// import DefaultConfigs from '../Constants/DefaultConfigs';

const defaultConfigs = {};

export const updateAppConfig = (updatedAppConfig) => {
  try {
    if (updatedAppConfig?.cms?.messages) {
      const updatedMessages = mergeObjects(
        configManager.cms.messages,
        updatedAppConfig?.cms?.messages
      );

      configManager.cms.messages = normalizeKeys(updatedMessages);
    }

    if (updatedAppConfig?.cms?.errors) {
      configManager.cms.errors = {
        ...configManager.cms.errors,
        ...normalizeKeys(updatedAppConfig.cms.errors),
      };
    }

    if (updatedAppConfig?.config) {
      configManager.config = {
        ...configManager.config,
        ...normalizeKeys(updatedAppConfig.config),
      };
    }
    return true;
  } catch (error) {
    logger.error('Error updating the AppConfig.', { error, updatedAppConfig });
    return false;
  }
};

// TODO :- Refactor this
function mergeObjects(og, so) {
  for (var key in so) {
    if (typeof og[key] === 'object') {
      mergeObjects(og[key], so[key]);
    } else {
      if (og[key] || typeof og[key] === 'boolean') {
        og[key] = so[key];
      }
    }
  }
  return og;
}

const configManager = {
  config: normalizeKeys(defaultConfigs),
  cms: {
    messages: normalizeKeys(defaultLocale.messages),
    errors: normalizeKeys(defaultLocale.errors),
  },
};

// On Page load auto update keys based on SSR
if (typeof window !== 'undefined') {
  (() => {
    updateAppConfig({
      cms: {
        messages:
          window?.__NEXT_DATA__?.props?.initialState?.cms?.pageModel?.staticMessagesOverride,
      },
    });
  })();
}

/**
 * AppConfig Class for CnC Module
 */
class AppConfig {
  /**
   * Retrieves the requestedKey from data.cms.errors or returns defaultValue / null if passed.
   * @type {function}
   * @param {string} requestedKey
   * @param {*} defaultReturn
   * @returns {*|null}
   */
  getCMSError(requestedKey, defaultReturn = null) {
    const path = requestedKey.split('.');

    return path.reduce(
      (xs, key) => (xs && xs[key] ? xs[key] : defaultReturn),
      configManager.cms.errors
    );
  }

  /**
   * Retrieves the requestedKey from data.cms.messages or returns defaultValue / null if passed.
   * @type {function}
   * @param {string} requestedKey
   * @param {*} defaultReturn
   * @returns {*|null}
   */
  getCMSMessage(requestedKey = '', defaultReturn = null) {
    const path = requestedKey.split('.');

    return path.reduce(
      (xs, key) => (xs && xs[key] ? xs[key] : defaultReturn),
      configManager.cms.messages
    );
  }

  /**
   * Retrieves the list of requested keys from data.cms
   * @param {...string} cmsKeys
   * @return {Readonly<object>}
   */
  getCMSMessages(...cmsKeys) {
    const cmsMapValue = {};
    if (cmsKeys.length) {
      cmsKeys.reduce((values, key) => {
        values[key] = this.getCMSMessage(key);
        return values;
      }, cmsMapValue);
    }
    return Object.freeze(cmsMapValue);
  }

  /**
   * Retrieves the requestedKey from data.config, returns as boolean if equivalent or / null if doesn't exist.
   * @type {function}
   * @param {string} requestedKey
   * @returns {boolean|*}
   */
  getConfigValue(requestedKey) {
    const requestedValue = isTypeOf(configManager.config[requestedKey], 'undefined')
      ? false
      : configManager.config[requestedKey];
    if (isTypeOf(requestedValue, 'boolean')) {
      return requestedValue;
    } else if (requestedValue === 'true') {
      return true;
    } else if (requestedValue === 'false') {
      return false;
    } else if (requestedValue !== null && Number.isNaN(Number(requestedValue)) === false) {
      return Number(requestedValue);
    } else {
      return requestedValue;
    }
  }
}

export default new AppConfig();
