import { shallow } from 'enzyme';
import LineItem from '../LineItem';

describe('<LineItem/>', () => {
  test('should render lineItem component with props value', () => {
    const wrapper = shallow(
      <LineItem variant="p" label="tax" amount="23.00" currency="$" className="lineItemCart" />
    );

    expect(wrapper.find('.lineItemp').last().children().text()).toBe('$23.00');
    expect(wrapper.find('.lineItemp').first().children().text()).toBe('tax');
    expect(wrapper.find('.lineItemp').first().prop('variant')).toBe('p');
    expect(wrapper.find('.lineItemCart').length > 0).toBe(true);
  });

  test('should interchange `$` and `-` if amount props receives negative value', () => {
    const wrapper = shallow(<LineItem variant="p" label="tax" amount="-23.00" />);

    expect(wrapper.find('.lineItemp').last().children().text()).toBe('-$23.00');
  });

  test('should return FREE if amount props value was free', () => {
    const wrapper = shallow(<LineItem variant="p" label="tax" amount="free" />);

    expect(wrapper.find('.lineItemp').last().children().text()).toBe('FREE');
  });
});
