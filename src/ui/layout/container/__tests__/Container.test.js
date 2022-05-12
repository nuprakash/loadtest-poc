import { shallow } from 'enzyme';
import Container from '../Container';

describe('<Container />', () => {
  let containerWrapper;
  const childrenProps = <div>children props</div>;
  beforeAll(() => {
    containerWrapper = shallow(<Container />);
  });

  it('should render container with className props', () => {
    containerWrapper.setProps({ className: 'containerTag' });
    expect(containerWrapper.find('.containerTag').length).toBe(1);
  });

  it('should render container with id props', () => {
    containerWrapper.setProps({ id: 'container' });
    expect(containerWrapper.find('#container').length).toBe(1);
  });

  it('should render container with children props', () => {
    containerWrapper.setProps({ children: childrenProps });
    expect(containerWrapper.children().text()).toBe('children props');
  });
});
