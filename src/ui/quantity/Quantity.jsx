import { useProductContext } from '@Components/product/ProductContext';
import { bool, func, number, string } from 'prop-types';
import { useEffect, useState } from 'react';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import { Row } from '../layout';
import styles from './Quantity.module.scss';

/**
 * Quantity Component
 * @param {number} initialQty -  initail Quantity received as a props
 * @param {number} minQty -  Minimum Quantity per product
 * @param {number} maxQty -  Maximum Quantity can be added per product
 * @param {number} handleOnQtyChange -  callback function after every quantity changes
 * @param {string} className - to control the Quantity Component
 * @param {boolean} isDisabled - Flag to disable quantity box
 * @returns {*}
 */
const Quantity = ({ className, initialQty, maxQty, minQty, handleOnQtyChange, isDisabled }) => {
  const [quantity, setQuantity] = useState();
  const { selectedSkuId } = useProductContext();

  // set inital quantity and when props is changed
  useEffect(() => {
    setQuantity(initialQty);
  }, [initialQty, selectedSkuId]);

  //handle quantity increase and change
  const increaseQuantity = () => {
    setQuantity((preState) => preState + 1);
    handleOnQtyChange && handleOnQtyChange(quantity + 1, 'plus');
  };

  //handle quantity decrease and change
  const decreaseQuantity = () => {
    setQuantity((preState) => preState - 1);
    handleOnQtyChange && handleOnQtyChange(quantity - 1, 'minus');
  };

  const classes = [styles.quantity, className, isDisabled ? styles.quantityDisabled : '']
    .join(' ')
    .trim();

  return (
    <Row justifyContent="space-between" alignItems="center" className={classes}>
      <Button
        className={styles.quantityDecreaseBtn}
        disabled={isDisabled || quantity <= minQty}
        onClick={quantity > minQty ? decreaseQuantity : null}
        theme="white"
      >
        <Icon iconName="minus" />
      </Button>

      <span className={styles.quantityVal}>{quantity}</span>

      <Button
        className={styles.quantityIncreaseBtn}
        onClick={quantity < maxQty ? increaseQuantity : null}
        disabled={isDisabled || quantity >= maxQty}
        theme="white"
      >
        <Icon iconName="plus" />
      </Button>
    </Row>
  );
};

Quantity.propTypes = {
  className: string,
  initialQty: number,
  minQty: number,
  maxQty: number,
  handleOnQtyChange: func,
  isDisabled: bool,
};

Quantity.defaultProps = {
  className: '',
  initialQty: 1,
  minQty: 1,
  maxQty: 999,
  handleOnQtyChange: null,
  isDisabled: false,
};
export default Quantity;
