import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import React from 'react';
import Modal from '../Modal';

describe('<Modal>', () => {
  const handleafterClose = jest.fn();
  const handlebeforeClose = jest.fn();
  const handleafterOpen = jest.fn();

  it('should render component', () => {
    const modalWrapper = mount(
      <Modal
        handleAfterOpen={handleafterOpen}
        handleAfterClose={handleafterClose}
        handleBeforeClose={handlebeforeClose}
        showModal={true}
        disableClose={false}
      >
        <Modal.head>Title</Modal.head>
        <Modal.body>Body</Modal.body>
      </Modal>
    );
    waitForComponentToPaint(modalWrapper);

    expect(modalWrapper).toBeDefined();
  });

  it('should return null if showModal flag was false', () => {
    const modalWrapper = mount(
      <Modal
        handleAfterOpen={handleafterOpen}
        handleAfterClose={handleafterClose}
        handleBeforeClose={handlebeforeClose}
        showModal={false}
        disableClose={false}
      >
        <Modal.head>Title</Modal.head>
        <Modal.body>Body</Modal.body>
      </Modal>
    );
    waitForComponentToPaint(modalWrapper);

    expect(modalWrapper).toEqual({});
  });

  it('should able to override existing class of content and overlay', () => {
    const modalWrapper = mount(
      <Modal
        handleAfterOpen={handleafterOpen}
        handleAfterClose={handleafterClose}
        handleBeforeClose={handlebeforeClose}
        showModal={true}
        disableClose={false}
      >
        <Modal.head>Title</Modal.head>
        <Modal.body>Body</Modal.body>
      </Modal>
    );
    modalWrapper.setProps({ overlayClass: 'overlayContent', className: 'contentOver' });
    waitForComponentToPaint(modalWrapper);

    expect(modalWrapper.find('.overlayContent').length > 0).toBe(true);
    expect(modalWrapper.find('.contentOver').length > 0).toBe(true);
  });

  it('should trigger callback functions on Modal close', async () => {
    const modalWrapper = mount(
      <Modal
        handleAfterOpen={handleafterOpen}
        handleAfterClose={handleafterClose}
        handleBeforeClose={handlebeforeClose}
        showModal={true}
        disableClose={false}
      >
        <Modal.head>Title</Modal.head>
        <Modal.body>Body</Modal.body>
      </Modal>
    );
    modalWrapper.find('.rrsModalOverlay').simulate('click');
    waitForComponentToPaint(modalWrapper);

    expect(handlebeforeClose).toBeCalled();
  });
});
