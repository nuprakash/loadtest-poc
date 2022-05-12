/*
 * File: ApiServiceInstance.js
 * Project: webapp-cdeals
 * Created Date: Thursday, August 26th 2021, 11:35:25 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday August 30th 2021 7:45:55 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { getSessionInfo } from '@Redux/actions/SessionInfo';
import { Store } from '@Redux/Store';
import logger from '@Utils/Logger';

//TODO:- Pass cms configuration here
const Configuration = {};

/**
 * ApiServiceInstance - Proxy layer
 */
class ApiServiceInstance {
  async invokeApiServiceInstance() {
    try {
      //invoke with auto injected configuration
      const sessionConfirmationNumber = Store.getState()?.sessionInfo?.sessionConfirmationNumber;
      return await this.module.invoke(
        { ...this.data, sessionConfirmationNumber },
        Configuration.data
      );
    } catch (errorResponse) {
      //override error response
      return await this.modifyErrorResponse(errorResponse);
    }
  }

  async modifyErrorResponse(errResponse) {
    const { code } = errResponse;

    // session retry logic
    if (
      code === 'SESSION_CONFIRMATION_NUMBER_MISMATCH_ERROR' ||
      code === 'SESSION_TIME_OUT_ERROR'
    ) {
      // incase session id is mismatch, fetch new session and retry the original request
      await Store.dispatch(getSessionInfo());

      const sessionConfirmationNumber = Store.getState()?.sessionInfo?.sessionConfirmationNumber;
      return await this.module.invoke(
        { ...this.data, sessionConfirmationNumber },
        Configuration.data
      );
    }

    //return the error response
    return Promise.reject(errResponse);
  }

  async serviceCall(className, data) {
    try {
      const folderName =
        (className && className?.[0]?.toLowerCase() + className.slice(1)) || className;
      const _module = await import(
        /* webpackMode: "eager" */
        /* webpackExclude: /\.(spec|test)\.js$/ */
        `../../services/${folderName}/${className}.js`
      );

      this.module = _module.default;
      this.data = data;
      return await this.invokeApiServiceInstance();
    } catch (error) {
      logger.error(
        `Error occurred while trying to execute Services class file ${className} `,
        error
      );
      return Promise.reject(error);
    }
  }

  get(className) {
    return {
      invoke: async (data) => await this.serviceCall(className, data),
    };
  }
}

export default new ApiServiceInstance();
