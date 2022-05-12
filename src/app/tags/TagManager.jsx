/*
 * File: TagManager.jsx
 * Project: webapp-cdeals
 * Created Date: Sunday, June 27th 2021, 6:56:20 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Friday December 10th 2021 3:22:54 pm
 * Modified By: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import { trackPageView } from '@Libs/dataLayer/DataLayer';
import { getPageType } from '@Libs/dataLayer/DataLayer.helper';
import Script from 'next/script';
import { object, string } from 'prop-types';
import { useEffect } from 'react';

/**
 * @function TagManager
 */
const TagManager = ({ asPath, sessionInfo }) => {
  // stop loading tagmanager in development mode
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  useEffect(() => {
    // Trigger page view events after the sessionInfo API call succeed
    if (sessionInfo?.profileId) {
      trackPageView(sessionInfo, getPageType(asPath));
    }
  }, [asPath, sessionInfo]);

  return (
    <>
      <Script id="ga-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MNQWP44');`}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MNQWP44"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
};

TagManager.propTypes = {
  asPath: string.isRequired,
  sessionInfo: object.isRequired,
};

export default TagManager;
