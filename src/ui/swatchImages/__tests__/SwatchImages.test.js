import { shallow } from 'enzyme';
import SwatchImages from '../SwatchImages';

const ImgProps = {
  src: 'Img',
  alt: 'Image',
};

const ImgProps2 = {
  src: '',
};

describe('<SwatchImages />', () => {
  it('should render swatchImages component with custom props', () => {
    const wrapper = shallow(
      <SwatchImages className="bob" ImgProps={ImgProps} shape="square" selected={true} />
    );

    expect(wrapper.find('.bob').length).toBe(1);
    expect(wrapper.find('.swatch-square').length > 0).toBe(true);
    expect(wrapper.find('.swatchSelected').length > 0).toBe(true);
    expect(wrapper.find('Image').prop('alt')).toBe('Image');
  });

  it('should trigger callback when swatch image is clicked', () => {
    const mockMouseOver = jest.fn();
    const mockMouseClick = jest.fn();
    const wrapper = shallow(
      <SwatchImages
        handleOnClick={mockMouseClick}
        handleOnMouseOver={mockMouseOver}
        ImgProps={ImgProps}
        value="testMouseClick"
      />
    );
    wrapper.find('span').simulate('click');

    expect(mockMouseClick).toHaveBeenCalledTimes(1);
    expect(mockMouseClick).toHaveBeenCalledWith('testMouseClick');
    expect(mockMouseOver).toHaveBeenCalledTimes(0);
  });

  it('should trigger callback when mouseover on swatch image', () => {
    const mockMouseOver = jest.fn();
    const mockMouseClick = jest.fn();
    const wrapper = shallow(
      <SwatchImages
        handleOnClick={mockMouseClick}
        handleOnMouseOver={mockMouseOver}
        ImgProps={ImgProps}
        value="testMouseOver"
      />
    );
    wrapper.find('span').simulate('mouseover');

    expect(mockMouseOver).toHaveBeenCalledTimes(1);
    expect(mockMouseOver).toHaveBeenCalledWith('testMouseOver');
    expect(mockMouseClick).toHaveBeenCalledTimes(0);
  });

  it('should return null when there is no image passed', () => {
    const wrapper = shallow(<SwatchImages selected ImgProps={ImgProps2} />);

    expect(wrapper).toEqual({});
  });
});
