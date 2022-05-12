/*
 * File: Helper.js
 * Project: webapp-cdeals
 * Author: prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import PATTERNS from '@Utils/Patterns';

export const GetCardType = (number) => {
  if (PATTERNS.MASTER_CARD.test(number)) return 'MasterCard';
  if (number?.match(new RegExp(PATTERNS.VISA)) != null) return 'Visa';
  if (number?.match(new RegExp(PATTERNS.AMEX)) != null) return 'AmericanExpress';
  if (number?.match(new RegExp(PATTERNS.Discover)) != null) return 'Discover';
};

export const formatOptions = (sortItems, selectedValue) => {
  return sortItems.map((item) => {
    return {
      label: item.label,
      value: item.value,
      isSelected: item.value === selectedValue ? true : false,
    };
  });
};

export const parsePhoneNumberInput = (value) => {
  return value.replace(/\+1/g, '').replace(PATTERNS.ALLOW_INTEGER_INPUT, '');
};

export const parseNumberOnly = (value) => {
  return value.replace(/\+1/g, '').replace(PATTERNS.ALLOW_INTEGER_INPUT, '');
};

export const parseCreditCardNumberInput = (value) => {
  return value.replace(/-/g, '');
};
