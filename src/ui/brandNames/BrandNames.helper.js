/* istanbul ignore file */

import Patterns from '@Utils/Patterns';

/**
 * Function to split the alphabetical and numeric brands
 * @param {number} brands - contains all brands
 * @returns
 */
export const sortBrandNames = (brands) => {
  let numericBrands = {};
  let alphabeticalBrands = {};
  Object.keys(brands)?.filter((key) => {
    if (key.match(Patterns.NUMBERS_ONLY)) {
      /** splitting numeric brands from all brands */
      numericBrands = { ...numericBrands, ...{ [key]: brands[key] } };
    } else {
      /** splitting alphabetical brands from all brands */
      alphabeticalBrands = { ...alphabeticalBrands, ...{ [key]: brands[key] } };
    }
  });
  return { numericBrands, alphabeticalBrands };
};
