/* eslint-disable no-console */
/*
 * File: index.js
 * Project: webapp-rrs
 * Created Date: Friday, March 19th 2021, 10:05:19 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Monday November 1st 2021 12:32:20 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

var PageManifestJson = require('./dist/pages-manifest.json');
var RoutesManifestJson = require('./dist/routes-manifest.json');
const express = require('serverless-express/express');
const handler = require('serverless-express/handler');

const app = express();
const dynamicRoutes = RoutesManifestJson.dynamicRoutes;

process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection - error message:', reason);
});

const matchDynamicRoute = (uri) => {
  for (const { page, regex } of dynamicRoutes) {
    const re = new RegExp(regex, 'i');
    if (re.test(uri)) {
      return page;
    }
  }
};

app.get('*', async (req, res) => {
  // check the dynamic routes and find the page path.
  const pathName = matchDynamicRoute(req.url);
  // Use pathname if not found fallback to the request url
  const pagePath = PageManifestJson[pathName || req.url.split('?')[0]];
  const page = require(`./dist/${pagePath || 'pages/404'}`);

  return await page.render(req, res);
});

exports.handler = handler(app);
