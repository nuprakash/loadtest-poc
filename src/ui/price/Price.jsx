/*
 * File: Price.jsx
 * Project: webapp-cdeals
 */

// Import Dependencies, scss and helper function
import { bool, func, shape, string } from 'prop-types';
import { Row } from '../layout';
import styles from './Price.module.scss';

/**
 * Price Component
 * @param {object} priceInput -  price object
 * @param {string} className - to control the Price Component
 * @param {string} layout - to render price component
 * @param {string} isVip - flag for vip price
 * @param {string} isGiftCardProduct - flag to hide vip price for giftcard
 * @param {string} offerMessageOverride - Callback for offerMessage
 * @returns {*}
 */

const Price = ({
  className,
  priceInput,
  layout,
  isVip,
  isGiftCardProduct,
  offerMessageOverride,
}) => {
  const {
    original,
    sale,
    vip,
    offerMessage,
    savings,
    savingslabel,
    yourPrice,
    yourPriceLabel,
  } = priceInput;

  if (!(original || vip)) return null;

  const rootClasses = [styles.price, className].join(' ').trim();

  // create price element based on conditions
  const renderPriceElement = (price, color, type) => {
    const priceClasses = [styles[color]].join(' ').trim();
    return (
      <div>
        <span className={priceClasses}>{type === 'inSale' ? sale : price}</span>
        {type == 'inSale' && <span className={styles.priceOffer}>Was {original}</span>}
        {type == 'vip' && vip && offerMessage && (
          <span className={styles.messageVip}>{offerMessage}</span>
        )}
      </div>
    );
  };

  const renderPLPPrices = () => {
    return (
      <Row className={rootClasses} flexDirection="column">
        {original && renderPriceElement(original, 'price-original', sale ? 'inSale' : null)}
        {vip ? renderPriceElement(vip, 'price-vip', 'vip') : null}
        {offerMessageOverride ? (
          <span className={styles.messageVip}>{offerMessageOverride?.() ?? null}</span>
        ) : null}
      </Row>
    );
  };

  const renderPDPPrices = () => {
    const vipClass = [styles.priceVip].join(' ').trim();
    return (
      <Row className={`${rootClasses} ${styles.pdp}`} alignItems="flex-end">
        <div>
          <div className={sale ? styles.priceStriked : null}>{original}</div>
          {sale && <div className={styles.pdpSale}>{sale}</div>}
        </div>
        <div className={vipClass}>
          {vip && (
            <>
              {original && <span className={styles.pdpDivider}></span>}
              {vip}
            </>
          )}
          {offerMessage || offerMessageOverride ? (
            <span className={styles.messageVip}>
              {offerMessageOverride?.(priceInput) ?? offerMessage}
            </span>
          ) : null}
        </div>
      </Row>
    );
  };

  const renderCartPrices = () => {
    return (
      <Row className={`${rootClasses} ${styles.cart}`} flexDirection="column">
        {original && (
          <span
            className={`${styles.priceOriginal} ${
              (isVip && vip) || sale ? styles.priceStriked : null
            }`}
          >
            {original}
          </span>
        )}
        {sale && <span className={styles.priceVip}>{sale}</span>}
        {vip && offerMessage && !isGiftCardProduct && (
          <Row flexDirection="column" textAlign="right">
            <span className={styles.priceVip}>{offerMessage}</span>
            <span className={styles.priceVip}>{vip}</span>
          </Row>
        )}
      </Row>
    );
  };

  const renderAtcPrices = () => {
    return (
      <Row className={`${rootClasses} ${styles.cart}`} flexDirection="column">
        {original && (
          <span
            className={`${styles.priceOriginal} ${
              (isVip && vip) || sale ? styles.priceStriked : null
            }`}
          >
            {original}
          </span>
        )}
        {sale && <span className={styles.priceVip}>{sale}</span>}
        {vip && offerMessage && !isGiftCardProduct && (
          <span className={styles.priceVip}>
            {vip} {offerMessage}
          </span>
        )}
        {offerMessageOverride ? (
          <span className={styles.messageVip}>{offerMessageOverride?.() ?? null}</span>
        ) : null}
      </Row>
    );
  };

  const renderCheckoutPrices = () => {
    return (
      <Row className={`${rootClasses} ${styles.cart}`} flexDirection="column">
        {original && (
          <span
            className={`${styles.priceOriginal} ${
              (isVip && vip) || sale ? styles.priceStriked : null
            }`}
          >
            {original}
          </span>
        )}

        {sale && !yourPrice && <span className={styles.priceVip}>{sale}</span>}

        {vip && !yourPrice && offerMessage && !isGiftCardProduct && (
          <Row flexDirection="column" textAlign="right">
            <span className={styles.priceVip}>{offerMessage}</span>
            <span className={styles.priceVip}>{vip}</span>
          </Row>
        )}

        {savings && !yourPrice && savingslabel && !isGiftCardProduct && (
          <Row flexDirection="column" textAlign="right">
            <span>{savingslabel}</span>
            <span>{savings}</span>
          </Row>
        )}

        {yourPrice && yourPriceLabel && (
          <Row className={styles.priceVip} flexDirection="column" textAlign="right">
            <span>{yourPriceLabel}</span>
            <span>{yourPrice}</span>
          </Row>
        )}
      </Row>
    );
  };

  const renderOrderConfirmPrices = () => {
    return (
      <Row className={`${rootClasses} ${styles.cart}`} flexDirection="column">
        {original && (
          <span
            className={`${styles.priceOriginal} ${
              (isVip && vip) || sale ? styles.priceStriked : null
            }`}
          >
            {original}
          </span>
        )}
        {sale && <span className={styles.priceVip}>{sale}</span>}
        {vip && isVip && offerMessage && !isGiftCardProduct && (
          <Row flexDirection="column" textAlign="right">
            <span className={styles.priceVip}>{offerMessage}</span>
            <span className={styles.priceVip}>{vip}</span>
          </Row>
        )}
      </Row>
    );
  };

  if (layout === 'pdp') {
    return renderPDPPrices();
  }

  if (layout === 'cart') {
    return renderCartPrices();
  }

  if (layout === 'atc') {
    return renderAtcPrices();
  }

  if (layout === 'checkout') {
    return renderCheckoutPrices();
  }

  if (layout === 'orderconfirm') {
    return renderOrderConfirmPrices();
  }

  return renderPLPPrices();
};

Price.propTypes = {
  className: string,
  priceInput: shape({
    original: string,
    sale: string,
    vip: string,
    vipMessage: string,
    saleMessage: string,
    isUmap: bool,
    isGiftCardProduct: bool,
  }).isRequired,
  layout: string,
  isVip: bool,
  isGiftCardProduct: bool,
  offerMessageOverride: func,
};

Price.defaultProps = {
  className: '',
  layout: 'plp',
  isVip: false,
  isGiftCardProduct: false,
  offerMessageOverride: null,
};

export default Price;
