import { shallow } from 'enzyme';
import LinkButton from '../LinkButton';

describe('<LinkButton />', () => {
  it('should render with custom props', () => {
    const linkButtonWrapper = shallow(<LinkButton className="linkBtn" />);

    expect(linkButtonWrapper.find('.linkBtn').length).toBeGreaterThan(0);
  });

  it('should render with children props', () => {
    const linkButtonWrapper = shallow(
      <LinkButton>
        <div>Children</div>
      </LinkButton>
    );

    expect(linkButtonWrapper.find('.clickableText').children().text()).toBe('Children');
  });

  it('should trigger callBack function', () => {
    const mockCallBack = jest.fn();
    const linkButtonWrapper = shallow(
      <LinkButton onClick={mockCallBack}>
        <div>Children</div>
      </LinkButton>
    );
    linkButtonWrapper.find('.clickableText').simulate('click');

    expect(mockCallBack).toHaveBeenCalled();
  });
});
