import Img from '@Assets/svg/icons/twitter.svg';
import SwatchImages from './SwatchImages';

export default {
  title: 'SwatchImages',
  component: SwatchImages,
};

export const Primary = (args) => <SwatchImages {...args} />;

Primary.args = {
  ImgProps: {
    src: Img,
    alt: 'Image',
  },
  shape: 'square',
  selected: true,
  value: 'twitter',
};
