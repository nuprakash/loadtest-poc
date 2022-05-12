/*
 * File: ModelContext.js
 * Project: webapp-cdeals
 * Created Date: Tuesday March 30th 2021
 * Author: Prakash <Prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday July 29th 2021 9:11:08 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { createContext, useContext } from 'react';

const ModelContext = createContext({
  show: false,
  closeModal: null,
});

export const useModalContext = () => useContext(ModelContext);

export default ModelContext;
