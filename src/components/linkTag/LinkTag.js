/*
 * File: LinkTag.js
 * Project: webapp-cdeals
 * Created Date: Thursday, May 27th 2021, 7:22:50 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Link from 'next/link';
import { node, oneOfType, string, bool } from 'prop-types';
import styles from '@Components/linkTag/LinkTag.module.scss';

const LinkTag = ({ href, className, children, underline, norole, ...restProps }) => {
  const AnchorTag = (
    <a
      {...(href ? { href: href } : {})}
      className={`${className} ${underline ? styles.underline : ''}`}
      {...restProps}
      {...(!href && !norole && { role: 'button' })}
    >
      {children}
    </a>
  );
  return href ? <Link href={href}>{AnchorTag}</Link> : AnchorTag;
};

LinkTag.propTypes = {
  children: oneOfType([string, node]).isRequired,
  href: string,
  className: string,
  underline: bool,
  norole: bool,
};

LinkTag.defaultProps = {
  href: null,
  className: '',
  underline: false,
  norole: false,
};

export default LinkTag;
