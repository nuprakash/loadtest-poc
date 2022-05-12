/*
 * File: Numbers.js
 * Project: webapp-cdeals
 * Created Date: Wednesday, October 20th 2021, 7:00:29 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday October 20th 2021 7:00:29 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import Patterns from '@Utils/Patterns';

/**
 * Function to get last 4 digits - 1111
 * @param {number} number - contains number to format
 * @returns
 */
export const displayLastFourDigits = (number = '') => {
  return number?.slice(-4);
};

/**
 * Function displayMaskedGiftCardNumber
 * @returns
 */
export const displayMaskedGiftCardNumber = (number) => {
  return `xxxx-xxxx-xxxx-${displayLastFourDigits(number)}`;
};

/**
 * Function to format number to (123) 456-7890
 * @param {number} number - contains number to format
 * @returns
 */
export const displayMaskedPhoneNumber = (number) => {
  return number?.replace(Patterns.MASK_PHONE_NUMBER, '($1) $2-$3');
};
