import StarRating from './StarRating';

export default {
  title: 'StarRating Component',
  component: StarRating,
};

export const Primary = (args) => <StarRating {...args} />;

Primary.args = {
  rating: 4.5,
  reviewCount: 43,
  reviewMessage: 'reviews',
};
