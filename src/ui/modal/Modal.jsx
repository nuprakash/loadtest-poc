/*
 * File: Modal.jss
 * Project: webapp-cdeals
 * -----
 * Last Modified: Thursday August 5th 2021 10:00:00 am
 * Modified By: PandiaRajan R <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import useBodyScrollLock from '@Hooks/UseBodyScrollLock';
import { Row } from '@UI/layout';
import { bool, func, node, oneOfType, string } from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import ModalBody from './modalBody/ModalBody';
import ModalContext from './ModalContext';
import ModalFooter from './modalFooter/ModalFooter';
import ModalHead from './modalHead/ModalHead';
import Portal from './Portal';

const { Provider } = ModalContext;

/**
 * Modal Component
 * @param {string} overlayClass - Class to override Overlay styles
 * @param {string} className - Class to override Content styles
 * @param {string} wrapperClass - Class to override wrapper styles
 * @param {boolean} showModal - State of the Modal
 * @param {children} children - Child Component
 * @param {func} handleAfterClose - Callback function for after modal close
 * @param {func} handleBeforeClose - Callback function for before modal close
 * @param {func} handleAfterOpen - Callback function for after modal open
 * @returns {*}
 * @constructor
 */
const Modal = (props) => {
  const {
    children,
    showModal,
    className,
    overlayClass,
    wrapperClass,
    handleAfterOpen,
    handleAfterClose,
    handleBeforeClose,
    closeOnOverlayClick,
    disableClose,
  } = props;

  const [show, setShow] = useState(showModal);

  const closeModal = async () => {
    /* istanbul ignore else */
    if (!disableClose) {
      handleBeforeClose && (await handleBeforeClose());
      setShow(!show);
      handleAfterClose && handleAfterClose();
    }
  };

  useEffect(() => {
    handleAfterOpen && handleAfterOpen();
  }, []);

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  useBodyScrollLock(show);

  if (!show || typeof window === 'undefined') return null;

  return (
    <Provider value={{ show, closeModal }}>
      <Portal rootId="rrs-modal">
        <Row className={styles.rrsModal} justifyContent="center">
          <div
            className={`${styles.rrsModalOverlay} ${overlayClass}`}
            {...(closeOnOverlayClick && { onClick: closeModal })}
          ></div>

          <div className={`${styles.rrsModalWrapper} ${wrapperClass}`}>
            <Row
              className={`${styles.rrsModalContent} ${className}`}
              alignContent="flex-start"
              tabIndex="-1"
              role="dialog"
              aria-modal="true"
            >
              {children}
            </Row>
          </div>
        </Row>
      </Portal>
    </Provider>
  );
};

Modal.propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
  overlayClass: string,
  wrapperClass: string,
  showModal: bool,
  handleAfterClose: func,
  handleAfterOpen: func,
  handleBeforeClose: func,
  closeOnOverlayClick: bool,
  disableClose: bool,
};

Modal.defaultProps = {
  overlayClass: '',
  className: '',
  wrapperClass: '',
  showModal: false,
  handleAfterClose: null,
  handleAfterOpen: null,
  handleBeforeClose: null,
  closeOnOverlayClick: true,
  disableClose: false,
};

Modal.head = ModalHead;
Modal.body = ModalBody;
Modal.footer = ModalFooter;

export default Modal;
