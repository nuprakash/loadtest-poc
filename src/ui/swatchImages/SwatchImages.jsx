import { any, array, bool, func, shape, string } from 'prop-types';
import Image from '../image/Image';
import styles from './SwatchImages.module.scss';
import AppConfig from '@App/appConfig/AppConfig';

/**
 * ImageSwatch Component
 * @param {string} className - Classname to overrode styles
 * @param {object} ImgProps - Image props object (src, alt , srcSet)
 * @param {string} selected - To change the css if image is selected
 * @param {string} shape - shape of the image
 * @param {function} handleOnClick - On click callback function
 * @param {function} handleOnMouseOver - Callback function on Mouse Over of swatch image
 * @param {function} onMouseEnter - Callback function on mouse enter
 * @param {function} onMouseLeave - Callback function on mouse leave
 * @param {string} value - Swatch image code/color code
 */

const SwatchImages = (props) => {
  const {
    className,
    ImgProps,
    shape,
    selected,
    handleOnClick,
    handleOnMouseOver,
    value,
    onMouseEnter,
    onMouseLeave,
  } = props;
  const imageClasses = [styles.swatchImg, styles[`swatch-img-${shape}`], ImgProps.className ?? '']
    .join(' ')
    .trim();
  const containerClasses = [
    styles.swatch,
    styles[`swatch-${shape}`],
    selected ? styles.swatchSelected : '',
    className,
  ]
    .join(' ')
    .trim();

  const onClick = () => handleOnClick(value);

  const onMouseOver = () => handleOnMouseOver(value);

  if (!ImgProps.src) return null;

  return (
    <span
      className={containerClasses}
      onMouseOver={handleOnMouseOver ? onMouseOver : null}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleOnClick ? onClick : null}
      role="button"
      aria-label={`${AppConfig.getCMSMessage('category.product_color_variant')} ${ImgProps?.alt}`}
    >
      <Image {...ImgProps} className={imageClasses} />
    </span>
  );
};

SwatchImages.propTypes = {
  className: string,
  ImgProps: shape({
    src: string.isRequired,
    alt: string,
    srcSet: array,
  }).isRequired,
  shape: string,
  selected: bool,
  handleOnClick: func,
  handleOnMouseOver: func,
  onMouseEnter: func,
  onMouseLeave: func,
  value: any,
};

SwatchImages.defaultProps = {
  className: '',
  shape: 'circle',
  selected: false,
  handleOnClick: null,
  handleOnMouseOver: null,
  onMouseEnter: null,
  onMouseLeave: null,
  value: null,
};

export default SwatchImages;
