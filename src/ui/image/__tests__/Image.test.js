import { shallow, mount } from 'enzyme';
import Image from '../Image';
import React from 'react';

describe('<Image>', () => {
  describe('Image render based on different props', () => {
    let image;
    beforeEach(() => {
      window.IntersectionObserver = jest.fn(() => ({
        observe: () => {},
        unobserve: () => {},
      }));
      image = mount(
        <Image src="test.jpg" alt="test" width={200} height={200} loaderClassName="lazy-loader" />
      );
      let imgWrapper = image.getDOMNode('img');
      const mockEntry = {
        isIntersecting: true,
        target: imgWrapper,
      };
      const observerCallback = window.IntersectionObserver.mock.calls[0][0];
      observerCallback([mockEntry]);
    });

    it('should render image component with custom props', () => {
      image.setProps({ loading: 'eager' });
      const img = image.find('img');

      expect(image.prop('srcSet')).toEqual([]);
      expect(img.length).toBe(1);
      expect(img.prop('src')).toBe('test.jpg');
      expect(img.prop('alt')).toBe('test');
      expect(img.prop('width')).toBe(200);
      expect(img.prop('height')).toBe(200);
      expect(image.prop('loaderClassName')).toBe('lazy-loader');
    });

    it('should render image component with loading props value was lazy', () => {
      image.setProps({ className: 'loader', loading: 'lazy' });

      expect(image.find('img').prop('loading')).toBe('lazy');
      expect(image.find('img').prop('className')).toContain('loader');
    });

    it('should trigger removeLoader when loads the image', () => {
      expect(image.getDOMNode('img').classList).toContain('lazy-loader');

      image.find('img').simulate('load');

      expect(image.getDOMNode('img').classList).not.toContain('lazy-loader');
    });
  });

  describe('<picture> and srcSet', () => {
    let srcImage = [];
    let image = '';
    beforeEach(() => {
      srcImage = [
        { breakPoint: 480, src: './480.jpg', type: 'Image/jpg' },
        { breakPoint: 768, src: './768.jpg', type: 'Image/jpg' },
      ];
      image = shallow(<Image srcSet={srcImage} alt="I am" id="defaultImage" loading="eager" />);
    });

    it('should render 1 picture element', () => {
      expect(image.find('picture').length).toBe(1);
    });

    it('should render 2 source elements inside a picture element', () => {
      expect(image.find('picture source').length).toBe(2);
    });

    it('should render img element with correct src', () => {
      expect(image.find('img').props().src).toBe('./768.jpg');
    });

    it('direct image is not rendered only if srcset is passed', () => {
      expect(image.find('#defaultImage')).toEqual({});
    });
  });

  it('Image element should not render when src props is not passed', () => {
    const wrapper = shallow(<Image alt="test" />);

    expect(wrapper).toEqual({});
  });
});
