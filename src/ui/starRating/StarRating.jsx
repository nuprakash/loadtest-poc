import { func, number, string } from 'prop-types';
import { Col, Row } from '../layout';
import styles from './StarRating.module.scss';

/**
 * StarRating Component
 * @param {string} className - Classname to overrode styles
 * @param {number} rating - Star ratings
 * @param {number} reviewCount - Number of people have been reviewd this product
 * @param {string} reviewMessage - Message to be given for reviewCount
 * @param {function} handleReviewMessageClick - Callback function on review message click
 */

const StarRating = ({
  className,
  rating,
  reviewCount,
  reviewMessage,
  handleReviewMessageClick,
}) => {
  const classes = [styles.rating, className].join(' ').trim();

  const reviewsRating = rating > 0 ? rating / 5 : 0;

  return (
    <Row className={classes} columnGap={5}>
      <div className={styles.ratingStar}>
        <div className={styles.ratingStarImg} style={{ width: `${reviewsRating * 100}%` }}></div>
      </div>
      {reviewMessage ? (
        <Col>
          <Row className={styles.ratingReviewsBig} columnGap={5} alignItems="center">
            {reviewCount > 0 ? (
              <>
                <span>{Number(rating).toFixed(1)}</span>
                <span className={styles.ratingReviewsBigGap}></span>
                <span className={styles.ratingReviewsBigMsg} onClick={handleReviewMessageClick}>
                  {reviewCount === 1 ? `${reviewCount} review` : `${reviewCount} ${reviewMessage}`}
                </span>
              </>
            ) : (
              <span className={styles.ratingReviewsBigMsg} onClick={handleReviewMessageClick}>
                No reviews
              </span>
            )}
          </Row>
        </Col>
      ) : (
        <span className={styles.ratingReviewsSmall}>
          {reviewCount > 0
            ? reviewCount === 1
              ? `${reviewCount} Review`
              : `${reviewCount} Reviews`
            : 'No Reviews'}
        </span>
      )}
    </Row>
  );
};

StarRating.propTypes = {
  rating: number,
  reviewCount: number,
  reviewMessage: string,
  className: string,
  handleReviewMessageClick: func,
};

StarRating.defaultProps = {
  rating: 0,
  reviewCount: 0,
  className: '',
  reviewMessage: '',
  handleReviewMessageClick: null,
};

export default StarRating;
