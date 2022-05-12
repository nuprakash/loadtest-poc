import { shallow } from 'enzyme';
import Card from '../Card';

describe('<Card/>', () => {
  it('should render Card with default props', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.find('.card-type-square').length > 0).toBeTruthy();
    expect(wrapper.find('.card-theme-white').length > 0).toBeTruthy();
  });

  it('should render Card with custom props', () => {
    const wrapper = shallow(<Card theme="iceblue" type="circle" />);

    expect(wrapper.find('.card-type-circle').length > 0).toBeTruthy();
    expect(wrapper.find('.card-theme-iceblue').length > 0).toBeTruthy();
  });

  it('should render Card with image prop when children props was null', () => {
    const wrapper = shallow(<Card image={<img src="test.png" alt="test" />} />);

    expect(wrapper.find('img').prop('alt')).toEqual('test');
  });

  it('should render Card with children prop ', () => {
    const wrapper = shallow(
      <Card image={<img src="test.png" alt="test" />} theme="white">
        <img src="test.png" alt="Children" />
      </Card>
    );

    expect(wrapper.find('img').prop('alt')).toEqual('Children');
  });

  it('should return {} when props is not passed', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toEqual({});
  });
});
