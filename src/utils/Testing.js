/*
 * File: Testing.js
 * Project: webapp-cdeals
 * Created Date: Friday, June 25th 2021, 6:43:54 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday September 6th 2021 1:44:32 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { act } from 'react-dom/test-utils';
import { useDispatch, useSelector } from 'react-redux';
import * as Snackbar from 'react-simple-snackbar';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

/**
 * waitForComponentToPaint
 * @param {children} wrapper - object that contains a mounted component
 * @returns {*}
 * @constructor
 */

export const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
};

/**
 * mockUseSelector
 * @param {children} mockObject - object that contains mocked state value
 * @returns {*}
 * @constructor
 */
export const mockUseSelector = (mockObject) => {
  useSelector.mockImplementation((state) => state(mockObject));
};

/**
 * mockUseSelector
 * @param {children} mockFunc - function that contains mocked value
 * @returns {*}
 * @constructor
 */
export const mockUseDispatch = (mockFunc) => {
  jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
  }));
  useDispatch.mockImplementation(() => mockFunc);
};

/**
 * mockReduxStore
 * @param {children} mockState - object contain initialState value
 * @returns {*}
 * @constructor
 */
export const mockReduxStore = (mockState) => {
  const middlewares = [thunk];

  const mockStore = configureStore(middlewares);

  const store = mockStore(mockState);
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);

  return store;
};

/**
 * mockNextRouter
 * @returns {*}
 * @constructor
 */
export const mockUseRouter = () => {
  return jest.spyOn(require('next/router'), 'useRouter');
};

/**
 * mockSnackbar
 * @returns {*}
 * @constructor
 */
export const mockSnackbar = () => {
  const openSnackbarMock = jest.fn();
  const closeSnackbarMock = jest.fn();
  return jest
    .spyOn(Snackbar, 'useSnackbar')
    .mockImplementation(() => [openSnackbarMock, closeSnackbarMock]);
};
