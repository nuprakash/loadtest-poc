/*
 * File: _app.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, January 5th 2021, 8:58:22 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday August 3rd 2021 2:03:32 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { updateAppContext } from '@App/AppContext';
import Layout from '@App/layout';
import '@Assets/styles/Global.scss';
import { updateDeviceType } from '@Redux/actions/DeviceInfo';
import { getDeviceType } from '@Utils/DeviceInfo';
import Wrapper from '@Redux/Store';
import Error from 'next/error';
import Head from 'next/head';
import { func, object, oneOfType } from 'prop-types';

const App = ({ Component, pageProps }) => {
  const { pageTitle, errorCode } = pageProps;
  return (
    <>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{pageTitle ?? 'Cdeals'}</title>
        </Head>

        {/* Google TagManager */}
        {/* <TagManager /> */}

        {/* <Header /> */}
        <main id="cdeals-main" role="main" aria-live="polite">
          {errorCode ? <Error statusCode={errorCode} /> : <Component {...pageProps} />}
        </main>
        {/* <Footer /> */}
      </Layout>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const { store, asPath, req } = ctx;
  const isServer = req ? true : false;

  // If the run env is server update context for later use
  if (isServer) updateAppContext({ server: { request: req?.headers } });

  const userAgent = req?.headers['user-agent'];
  if (isServer && userAgent) await store.dispatch(updateDeviceType(getDeviceType(userAgent)));

  const {
    cms: { pageModel },
  } = store.getState();

  let pageProps = {
    pageTitle: pageModel?.title, // CMS pageTitle, Can we overridden from component
  };

  // Validate CMS page
  // Note:- Temp changes for POC
  if (!asPath.includes('/cms/') && pageModel && !Object.keys(pageModel).length) {
    // pageProps.errorCode = 404;
    // pageProps.pageTitle = '404 Page Not Found';
  } else {
    // Valid Page rendering starts here
    pageProps = {
      ...pageProps,
      ...((Component.getInitialProps ? await Component.getInitialProps(ctx) : null) ?? {}),
    };
  }

  return { pageProps };
};

App.propTypes = {
  Component: oneOfType([func, object]).isRequired,
  pageProps: object.isRequired,
};

export default Wrapper.withRedux(App);
