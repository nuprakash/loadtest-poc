import { shallow } from 'enzyme';
import StarRating from '../StarRating';

const props = {
  rating: 4.5,
  reviewCount: 43,
  reviewMessage: 'review',
};

describe('<StarRating />', () => {
  it('should render the rating component with review messaage', () => {
    const wrapper = shallow(<StarRating {...props} reviewCount={1} />);

    expect(wrapper.find('.ratingReviewsBig').length).toBe(1);
    expect(wrapper.find('.ratingReviewsBigMsg').children().text()).toBe('1 review');
  });

  it('should render the rating component without review messaage', () => {
    const wrapper = shallow(<StarRating rating={4.5} reviewCount={43} />);

    expect(wrapper.find('.ratingReviewsSmall').length).toBe(1);
  });

  it('width of the start image should be as expected', () => {
    const { rating } = props;
    const wrapper = shallow(<StarRating {...props} />);

    expect(wrapper.find('.ratingStarImg').get(0).props.style).toHaveProperty(
      'width',
      `${(rating / 5) * 100}%`
    );
  });

  it('should render No Reviews when having review messaage and  reviewCount is 0', () => {
    const wrapper = shallow(<StarRating {...props} reviewCount={0} />);

    expect(wrapper.find('.ratingReviewsBigMsg').length > 0).toBe(true);
  });

  it('Review Count text should be provided as a 1 Review when Review Count is 1', () => {
    const wrapper = shallow(<StarRating reviewCount={1} rating={0} />);

    expect(wrapper.find('.ratingReviewsSmall').children().text()).toBe('1 Review');
  });

  it('Review Count text should be provided as a 34 Reviews when Review Count is 34', () => {
    const wrapper = shallow(<StarRating reviewCount={34} rating={0} />);

    expect(wrapper.find('.ratingReviewsSmall').children().text()).toBe('34 Reviews');
  });

  it('Review Count text should be provided as a No Review when not having review Message and Review Count is 0 ', () => {
    const wrapper = shallow(<StarRating reviewCount={0} rating={0} />);

    expect(wrapper.find('.ratingReviewsSmall').children().text()).toBe('No Reviews');
  });
});
