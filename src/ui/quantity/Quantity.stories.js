import Quantity from './Quantity';

export default {
  title: 'Quantity Component',
  component: Quantity,
};

const Template = (args) => <Quantity {...args} />;

export const Product = Template.bind({});

Product.args = {
  initialQty: 1,
  className: '',
};

export const Quantityminmax = Template.bind({});

Quantityminmax.args = {
  minQty: 2,
  maxQty: 10,
  isDisabled: false,
  initialQty: 4,
};
