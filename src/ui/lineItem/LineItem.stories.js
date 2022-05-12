import LineItem from './LineItem';

export default {
  title: 'LineItem Component',
  component: LineItem,
};

export const Primary = (args) => <LineItem {...args} />;

Primary.args = {
  label: 'Order Total',
  amount: '129.05',
  variant: 'p',
  currency: '$',
};
