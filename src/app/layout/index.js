/*
 * File: AppLayout.jsx
 * Project: webapp-cdeals
 * Created Date: Tuesday, August 17th 2021, 9:48:30 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Friday December 17th 2021 6:51:38 am
 * Modified By: Nelson <nelson.rondon@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import useBrowserLayoutEffect from '@Hooks/UseBrowserLayoutEffect';
import { updatePageDimensions, updateScrollPosition } from '@Redux/actions/DeviceInfo';
import { getDimensions, getScrollTop } from '@Utils/DeviceInfo';
import { node, oneOfType, string } from 'prop-types';
import { useDispatch } from 'react-redux';

let dimensionsTimeoutTracker = null;
let scrollTimeoutTracker = null;

/**
 * Component Layout
 * @param {string|node} children - Child elements to render
 * @returns
 */
const Layout = ({ children }) => {
  const dispatch = useDispatch();

  // Track window dimensions and add them to our redux store
  const trackWindowDimensions = () =>
    window.requestAnimationFrame(() => {
      clearTimeout(dimensionsTimeoutTracker);
      dimensionsTimeoutTracker = setTimeout(() => {
        dispatch(updatePageDimensions(getDimensions()));
      }, 50);
    });

  // Track scrollTop and update in redux store
  const trackScrollTop = () =>
    window.requestAnimationFrame(() => {
      clearTimeout(scrollTimeoutTracker);
      scrollTimeoutTracker = setTimeout(() => {
        dispatch(updateScrollPosition(getScrollTop()));
      }, 100);
    });

  useBrowserLayoutEffect(() => {
    // Listen for window resize
    trackWindowDimensions();
    window.addEventListener('resize', trackWindowDimensions, false);

    // Listen for window scroll
    trackScrollTop();
    window.addEventListener('scroll', trackScrollTop, false);

    return () => {
      window.removeEventListener('resize', trackWindowDimensions);
      window.removeEventListener('scroll', trackScrollTop);
    };
  }, []);

  return <>{children}</>;
};

Layout.propTypes = {
  children: oneOfType([string, node]).isRequired,
};

export default Layout;
