/* eslint-disable react/display-name */
/*
 * File: jest.setup.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 5th 2021, 11:34:47 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday October 26th 2021 12:23:43 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

// Mock Dynamic Imports globally
jest.mock('next/dynamic', () => (...props) => {
  const matchedPath = /(.)*('(.*)')(.)*/.exec(props[0].toString());
  if (matchedPath) {
    const Comp = require(matchedPath[3]);
    const DynamicComponent = Comp.default || Comp;
    DynamicComponent.displayName = 'LoadableComponent';
    DynamicComponent.preload = jest.fn();
    return DynamicComponent;
  } else {
    return () => <></>;
  }
});
