import Price from './Price';

export default {
  title: 'Price Component',
  component: Price,
  argTypes: {
    layout: {
      control: {
        type: 'select',
        options: ['pdp', 'atc', 'cart', 'checkout', 'orderconfirm'],
      },
    },
  },
};

export const Primary = (args) => <Price {...args} />;

Primary.args = {
  priceInput: {
    original: '12.99',
    sale: '11.99',
    vip: '10.99',
    offerMessage: 'VIP Price.',
    savings: '1.99',
    savingslabel: 'You Saved',
    yourPrice: '11.99',
    yourPriceLabel: 'MSRP',
  },
  layout: 'plp',
  isVip: false,
  isGiftCardProduct: false,
  offerMessageOverride: () => 'VIP! all your benefits apply.',
};
