/*
 * File: BrandNames.stories.js
 * Project: webapp-cdeals
 * Created Date: Friday, April 23th 2021, 12:08:43 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import BrandNames from './BrandNames';
import brands from '@Mocks/brandPLP/Brand.json';

export default {
  title: 'BrandNames Component',
  component: BrandNames,
};

export const primary = (args) => <BrandNames {...args} />;

primary.args = {
  brands: brands,
  defaultTab: 'ALL BRANDS',
  title: 'ALL RUNNING BRANDS IN ORDER',
  LinkTag: LinkTag,
};
