/*
 * File: Patterns.js
 * Project: webapp-cdeals
 * Created Date: Monday, May 3rd 2021, 1:00:10 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday September 11th 2021 10:49:02 am
 * Modified By: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

export default {
  URL_PROTOCOL: /^https?:\/\//,
  NAME: /^[A-Za-z\s&./,'()-]*$/,
  LETTERS_ONLY: /^[a-zA-Z]+$/,
  NUMBERS_ONLY: /^[0-9]+$/,
  EMAIL: /^\S+@\S+\.\S+$/,
  ALPHA_NUMERIC_ACCENT: /^[a-zA-Z0-9-',À-ÿ ]+$/,
  ALPHA_NUMERIC: /^[a-zA-Z0-9 ]+$/,
  ALLOW_NUMERIC_INPUT_ONLY: /[^0-9.]/g,
  ALLOW_INTEGER_INPUT: /[^0-9]/g,
  PHONE_NUMBER: /^[0-9 ()-]+$/,
  ALLOW_CHAR_INPUT_ONLY: /[^a-zA-Z]/g,
  SKIP_NON_DIGITS: /[^\d]/g,
  REMOVE_ALL_SPACE: /[\s]+/g,
  MIME_TYPE_IMAGE: /^image+\/[-\w.]+$/g,
  MIME_TYPE_VIDEO: /^video+\/[-\w.]+$/g,
  ZIP_CODE: /^[(A-Za-z0-9-\s)]{2,}$/,
  MONTHS: /(^0?[1-9]$)|(^1[0-2]$)/,
  MASTER_CARD: /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
  VISA: '^4',
  AMEX: '^3[47]',
  Discover: '^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)',
  DATE: /\d{4}/,
  LAST_FOUR_DIGIT: '(.{4})s*$',
  MASK_PHONE_NUMBER: /(\d{3})\D?(\d{3})\D?(\d{3})/,
  CVN: /^[0-9]{3,4}$/,
  LETTERS_SPACE_BETWEEN: /^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$/,
  TRAILING_SLASH: /\/$/,
  CITY: /^[A-Za-z\s,.;'&/.()-]*$/,
};
