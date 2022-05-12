import { node, oneOfType, string } from 'prop-types';

/**
 * Modal Body Component
 * @param {children} children - Child Component
 * @returns {*}
 * @constructor
 */

const ModalBody = ({ children }) => {
  return children;
};

ModalBody.propTypes = {
  children: oneOfType([string, node]).isRequired,
};

export default ModalBody;
