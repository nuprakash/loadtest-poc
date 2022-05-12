import { waitForComponentToPaint } from '@Utils/Testing';
import { mount } from 'enzyme';
import * as ModalContent from '../../ModalContext';
import ModalHead from '../ModalHead';

describe('<ModalHead>', () => {
  let wrapper;
  let map = {};
  let mockCallBack = jest.fn();

  beforeAll(() => {
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb;
    });

    const contextValues = { closeModal: mockCallBack };
    jest.spyOn(ModalContent, 'useModalContext').mockImplementation(() => contextValues);

    wrapper = mount(
      <ModalHead className="headContent">
        <span>title</span>
      </ModalHead>
    );
    waitForComponentToPaint(wrapper);
  });

  test('should render the component with default props', () => {
    expect(wrapper.find('.headContent').length > 0).toBe(true);

    expect(wrapper.find('Icon').length).toBe(1);
  });

  test('should able to override the Iconprops', () => {
    wrapper.setProps({
      iconProps: {
        iconName: 'exit',
        onClick: jest.fn(),
      },
    });

    expect(wrapper.find('Icon').length).toBe(1);

    wrapper.find('Icon').simulate('click');

    expect(wrapper.find('Icon').prop('iconName')).toBe('exit');
  });

  test('should close Modal popup when pressing escape key', () => {
    map.keyup({ target: document.body, key: 'Escape', keyCode: 27, which: 27 });
    expect(mockCallBack).toHaveBeenCalled();
  });
});
