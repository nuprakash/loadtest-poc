import { func, node, number, object, oneOf, oneOfType, string } from 'prop-types';
import { Row } from '../layout';
import styles from './Card.module.scss';

/**
 * Card Component
 * @param {node} image - Image to render
 * @param {string|node} title - Card title
 * @param {node} - Children to render
 * @param {string} theme - control the background  of the Card Component
 * @param {string} className - to override the class of the Card
 * @param {string} type - Type of card
 * @param {string} justifyContent - Flex props to pass on to Row Component
 * @param {string} textAlign - Text Align type
 * @param {string} alignItems - Align Card Contents
 * @param {string} display - Custom display property
 * @param {number} rowGap - Card Row Gap
 * @returns {*}
 */
const Card = (props) => {
  const {
    theme,
    type,
    className,
    image,
    title,
    justifyContent,
    children,
    textAlign,
    alignItems,
    display,
    rowGap,
    style,
    id,
  } = props;

  const typeClass = styles[`card-type-${type}`];
  const classes = [styles.card, typeClass, className, styles[`card-theme-${theme}`]]
    .join(' ')
    .trim();

  return (
    <Row
      className={classes}
      id={id}
      justifyContent={justifyContent}
      textAlign={textAlign}
      alignItems={alignItems}
      display={display}
      rowGap={rowGap}
      flexDirection="column"
      style={style}
    >
      {children ? (
        children
      ) : (
        <>
          {image && (
            <Row
              className={`${styles.cardImageBlock} ${typeClass}`}
              alignItems="center"
              justifyContent="center"
            >
              {image}
            </Row>
          )}
          {title}
        </>
      )}
    </Row>
  );
};

Card.propTypes = {
  className: string,
  id: string,
  theme: oneOf([
    'white',
    'natural',
    'skyblue',
    'iceblue',
    'vip-red',
    'warm-light-gray',
    'very-light-shade-gray',
  ]),
  type: oneOf(['square', 'circle']),
  image: node,
  title: oneOfType([string, node]),
  justifyContent: string,
  children: oneOfType([string, node]),
  LinkTag: func,
  href: string,
  textAlign: string,
  alignItems: string,
  display: string,
  rowGap: number,
  style: object,
};

Card.defaultProps = {
  type: 'square',
  theme: 'white',
  className: '',
  id: '',
  image: null,
  title: null,
  justifyContent: 'center',
  children: null,
  textAlign: 'left',
  alignItems: 'flex-start',
  display: 'inline-flex',
  rowGap: 10,
  style: null,
};

export default Card;
