/*
 * File: Number.test.js
 * Project: webapp-cdeals
 * Created Date: Wednesday, October 20th 2021, 7:02:33 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday October 20th 2021 8:22:49 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import {
  displayLastFourDigits,
  displayMaskedGiftCardNumber,
  displayMaskedPhoneNumber,
} from '../Numbers';

describe('Numbers Util', () => {
  describe('displayLastFourDigits', () => {
    it('Should return last 4 Digit number', () => {
      expect(displayLastFourDigits('1234567890')).toBe('7890');
    });

    it('Should return empty when number is undefined', () => {
      expect(displayLastFourDigits()).toBe('');
    });
  });

  describe('displayMaskedGiftCardNumber', () => {
    it('Should return mask Gift Card Number', () => {
      expect(displayMaskedGiftCardNumber('1234567890')).toBe('xxxx-xxxx-xxxx-7890');
    });

    it('Should return null of last four digit', () => {
      expect(displayMaskedGiftCardNumber()).toBe('xxxx-xxxx-xxxx-');
    });
  });

  describe('maskphoneNumber', () => {
    it('Should return maskphoneNumber', () => {
      expect(displayMaskedPhoneNumber('1234567890')).toBe('(123) 456-7890');
    });
  });
});
