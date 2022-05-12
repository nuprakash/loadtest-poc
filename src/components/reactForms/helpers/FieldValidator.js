/*
 * File: FieldValidator.js
 * Project: webapp-cdeals
 * Created Date: Monday, July 12th 2021, 1:26:20 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Saturday October 23rd 2021 5:31:31 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import PATTERNS from '@Utils/Patterns';

/**
 * Function to check value is present
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const required = (customError) => (value, field) =>
  value ? undefined : customError ?? `Please enter a valid ${field ?? 'input'}`;

/**
 * Function to validate email address
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const email = (customError) => (value, field) =>
  !value || PATTERNS.EMAIL.test(value)
    ? undefined
    : customError ?? `Please enter ${field ?? 'Input'} in valid format`;

/**
 * Function to validate phone number
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const phoneNumber = (customError) => (value, field) => {
  return !value || (PATTERNS.PHONE_NUMBER.test(value) && value?.length === 10)
    ? undefined
    : customError ?? `Please enter a valid 10-digit ${field ?? 'Input'}`;
};
/**
 * Function to validate name
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const name = (customError) => (value, field) =>
  PATTERNS.NAME.test(value)
    ? undefined
    : customError ?? `Please enter ${field ?? 'Input'} in valid format`;

/**
 * Function to validate alpha numberic characters
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const alphaNumeric = (customError) => (value, field) =>
  PATTERNS.ALPHA_NUMERIC_ACCENT.test(value)
    ? undefined
    : customError ?? `Only Alpha Numeric values are allowed for ${field ?? 'Input'}`;

/**
 * Function to validate number
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const number = (customError) => (value, field) =>
  value && isNaN(value) ? customError ?? `${field ?? 'Input'} must be a number` : undefined;

/**
 * Function to validate min length
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const minLength = (min, customError) => (value, field) =>
  value?.toString()?.length >= min
    ? undefined
    : customError ?? `${field ?? 'Input'} should be greater than ${min - 1}`;

/**
 * Function to validate max length
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const maxLength = (max, customError) => (value, field) =>
  value?.toString()?.length <= max
    ? undefined
    : customError ?? `${field ?? 'Input'} should be less than ${max + 1}`;

/**
 * Function to verify password and confirm password
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const confirmPassword = (password, customError) => (value, field) =>
  !value || value !== password
    ? customError ?? `Password and ${field ?? 'Confirm Password'} should match`
    : undefined;

/**
 * Function to verify email and confirm email
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const confirmEmail = (email, customError) => (value, field) =>
  !value || value !== email
    ? customError ?? `Email and ${field ?? 'Confirm Email'} should match`
    : undefined;

/**
 * Function to validate zip code
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const zipCode = (customError) => (value, field) =>
  !value || PATTERNS.ZIP_CODE.test(value)
    ? undefined
    : customError ?? `Please enter a valid ${field ?? 'Input'}`;

/**
 * Function to validate Cvn code
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const Cvn = (customError) => (value, field) =>
  (!value || PATTERNS.CVN.test(value)) && value?.length <= 4
    ? undefined
    : customError ?? `Please enter a valid  ${field ?? 'Input'}`;

/**
 * Function to validate Month
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const expiryMonth = (customError) => (value, field, options) => {
  const _data = new Date();
  const currentMonth = _data?.getMonth() + 1;
  const currentYear = _data.getFullYear();
  const { expirationYear } = options?.form?.getState()?.values;
  let validMonth = true;

  if (currentYear === parseInt(expirationYear) && value < currentMonth) {
    validMonth = false;
  }

  return !value ||
    (value.match(PATTERNS.MONTHS) && (!expirationYear || expirationYear.length !== 4 || validMonth))
    ? undefined
    : customError ?? `Please enter a valid  ${field ?? 'Input'}`;
};
/**
 * Function to validate card Number
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const cardNumber = (customError) => (value, field) => {
  return !value || (value?.length >= 14 && value?.length <= 16)
    ? undefined
    : customError ?? `Please enter a valid  ${field ?? 'Input'}`;
};

/**
 * Function to validate gift card
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const giftCardDigit = (customError) => (value, field) => {
  return !value || value?.length === 19
    ? undefined
    : customError ?? `Please enter a valid ${field ?? 'Input'}`;
};

/**
 * Function to validate gift card pin
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const giftCardPin = (customError) => (value, field) => {
  return !value || value?.length === 4
    ? undefined
    : customError ?? `Please enter a valid ${field ?? 'Input'}`;
};

/**
 * Function to validate Year code
 * @param {string} customError - Custom error message to display
 * @constant {} today - Today to get Current date
 * @constant {} currentYear - Current Year for Current year value
 * @returns
 */
export const expiryYear = (customError) => (value, field) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return PATTERNS.DATE.test(value) && value >= currentYear && value?.length === 4
    ? undefined
    : customError ?? `Please enter a valid ${field ?? 'Input'}`;
};

/**
 * Function to validate letters only
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const lettersOnly = (customError) => (value, field) =>
  PATTERNS.LETTERS_ONLY.test(value)
    ? undefined
    : customError ?? `Only letters are allowed for ${field ?? 'Input'}`;

/**
 * Function to validate letters space only
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const lettersSpaceBetween = (customError) => (value, field) =>
  PATTERNS.LETTERS_SPACE_BETWEEN.test(value)
    ? undefined
    : customError ?? `Only letters are allowed for ${field ?? 'Input'}`;

/**
 * Function to validate city
 * @param {string} customError - Custom error message to display
 * @returns
 */
export const city = (customError) => (value, field) =>
  PATTERNS.CITY.test(value) ? undefined : customError ?? `Please enter a valid ${field ?? 'Input'}`;

/**
 * Function to Compose multiple validation functions
 * @param  {function} validators - validation functions
 * @returns
 */
const FieldValidator = ([...validators], field, options) => (value) =>
  validators.reduce(
    (error, validator) => error || validator(value, field, options ?? {}),
    undefined
  );

/**
 * Function to validate number should not exceed range
 * @param {number} value - Range of  the input field
 * @returns
 */
export const rangeValidator = (min, max, customError) => (value) =>
  value <= max && value >= min
    ? undefined
    : customError ?? `Please choose a value between ${min} and ${max}`;

export default FieldValidator;
