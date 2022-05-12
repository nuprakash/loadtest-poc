import { shallow } from 'enzyme';
import Price from '../Price';

let mockCallBack = jest.fn(() => {
  return 'VIP! benefits apply.';
});

const priceInput = {
  original: '12.99',
  sale: '11.99',
  vip: '10.99',
  vipMessage: 'VIP Price',
  offerMessage: 'VIP! all your benefits apply.',
};
const priceInput2 = {
  original: '12.99',
  sale: '11.99',
};
const priceInput3 = {
  original: '12.99',
};
const priceInput4 = {
  original: '12.99',
};
const priceInput5 = {
  original: '0',
};
const priceInput6 = {
  ...priceInput,
  yourPrice: '12.39',
  yourPriceLabel: 'VIP Price',
  offerMessage: 'VIP! all your benefits apply.',
  isGiftCardProduct: false,
  savings: true,
  savingslabel: 'VIP Savings',
};
const priceInput7 = {
  sale: '11.99',
  vipMessage: 'VIP Price',
  offerMessage: 'VIP! all your benefits apply.',
};

describe('<Price/>', () => {
  test('should return empty when the original price is not given', () => {
    const wrapper = shallow(<Price priceInput={priceInput7} />);

    expect(wrapper).toEqual({});
  });

  test('should render Price component', () => {
    const wrapper = shallow(<Price priceInput={priceInput} />);

    expect(wrapper).toBeDefined();
  });

  test('should render only original price', () => {
    const wrapper = shallow(<Price priceInput={priceInput3} />);

    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('.price-original').text()).toEqual('12.99');
  });

  test('should render price with originalPrice and salePrice props', () => {
    const wrapper = shallow(<Price priceInput={priceInput2} />);

    expect(wrapper.find('span').length).toBe(2);
    expect(wrapper.find('.price-original').text()).toEqual('11.99');
    expect(wrapper.find('.priceOffer').text()).toEqual('Was 12.99');
  });

  xtest('should render price all three originalPrice, salePrice and vipPrice props', () => {
    const wrapper = shallow(<Price priceInput={priceInput} />);

    expect(wrapper.find('span').length).toBe(4);
    expect(wrapper.find('.price-vip').text()).toEqual('10.99');
    expect(wrapper.find('.priceOffer').text()).toEqual('Was 12.99');
    expect(wrapper.find('.price-original').text()).toEqual('11.99');
  });

  xtest('should render VIP all benefits apply message', () => {
    const wrapper = shallow(<Price priceInput={priceInput4} />);

    expect(wrapper.find('.messageVipBenefits').text()).toEqual('VIP! all your benefits apply.');
  });

  test('should not render price component when original price value was 0', () => {
    const wrapper = shallow(<Price priceInput={priceInput5} />);

    expect(wrapper).toEqual({});
  });

  test('should not render salesMessage when type props value was not plp', () => {
    const wrapper = shallow(<Price priceInput={priceInput} type="abc" />);

    expect(wrapper.find('.messageVipBenefits').length).toBe(0);
  });

  test('should render vipMessage when offerMessageOverride function is given in plp', () => {
    const wrapper = shallow(
      <Price priceInput={priceInput} type="abc" offerMessageOverride={mockCallBack} />
    );

    expect(wrapper.find('.messageVip').at(1).children().text()).toBe('VIP! benefits apply.');
  });

  describe('pdp', () => {
    test('should render pdpPrices when layout props value was pdp', () => {
      const wrapper = shallow(
        <Price
          priceInput={{ ...priceInput, offerMessage: '' }}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="pdp"
        />
      );

      expect(wrapper.find('.pdp').length > 0).toBe(true);
    });

    test('should not render priceStriked className when sale value not given', () => {
      const wrapper = shallow(
        <Price
          priceInput={{ ...priceInput, offerMessage: 'VIP Price', sale: '' }}
          type="abc"
          layout="pdp"
        />
      );

      expect(wrapper.find('.priceStriked').length).toBe(0);
    });

    test('should not render messageVip className when offerMessage and offerMessageOverride is not given', () => {
      const wrapper = shallow(
        <Price priceInput={{ ...priceInput, offerMessage: '', sale: '' }} type="abc" layout="pdp" />
      );

      expect(wrapper.find('.messageVip').length).toBe(0);
    });
  });

  describe('cart', () => {
    test('should render cartPrices when layout props value was cart', () => {
      const wrapper = shallow(
        <Price
          priceInput={priceInput6}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="cart"
          isVip={true}
        />
      );

      expect(wrapper.find('.cart').length > 0).toBe(true);
    });

    test('should render priceStriked className when user is not vip', () => {
      const wrapper = shallow(
        <Price
          priceInput={priceInput6}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="cart"
          isVip={false}
        />
      );

      expect(wrapper.find('.priceStriked').length > 0).toBe(true);
    });

    test('should not render priceStriked className when user is not vip and sale value is not given', () => {
      const wrapper = shallow(
        <Price
          priceInput={{ ...priceInput6, sale: '' }}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="cart"
          isVip={false}
        />
      );

      expect(wrapper.find('.priceStriked').length).toBe(0);
    });
  });

  describe('checkout', () => {
    test('should render yourPrice and yourPriceLabel when layout props values was checkout', () => {
      const wrapper = shallow(
        <Price
          priceInput={priceInput6}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="checkout"
          isVip={true}
        />
      );

      expect(wrapper.find('span').at(1).children().text()).toBe('VIP Price');
      expect(wrapper.find('span').at(2).children().text()).toBe('12.39');
    });

    test('should render priceVip Message when yourPrice is not given', () => {
      const wrapper = shallow(
        <Price
          priceInput={{ ...priceInput6, yourPrice: '', vip: '10.99' }}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="checkout"
        />
      );

      expect(wrapper.find('.priceVip').length > 0).toBe(true);
    });

    test('should not render priceStriked className when user is not vip and sale value is not given', () => {
      const wrapper = shallow(
        <Price
          priceInput={{ ...priceInput6, sale: '', yourPrice: '', vip: '' }}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="checkout"
        />
      );

      expect(wrapper.find('.priceStriked').length).toBe(0);
    });
  });

  describe('orderConfirmation', () => {
    test('should render orderConfirmation Prices when layout props values was orderconfirm', () => {
      const wrapper = shallow(
        <Price
          priceInput={{ ...priceInput6, yourPrice: '', vip: '10.99' }}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="orderconfirm"
          className="orderconfirm"
          isVip={true}
        />
      );

      expect(wrapper.find('.orderconfirm').length > 0).toBe(true);
    });

    test('should render priceStriked className when user is not vip', () => {
      const wrapper = shallow(
        <Price
          priceInput={{ ...priceInput6, yourPrice: '', vip: '' }}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="orderconfirm"
          className="orderconfirm"
        />
      );

      expect(wrapper.find('.priceStriked').length > 0).toBe(true);
    });

    test('should not render priceStriked className when user is not vip and sale value is not given', () => {
      const wrapper = shallow(
        <Price
          priceInput={{ ...priceInput6, sale: '', yourPrice: '', vip: '' }}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="orderconfirm"
          className="orderconfirm"
        />
      );

      expect(wrapper.find('.priceStriked').length).toBe(0);
    });
  });

  describe('atc', () => {
    test('should render atcPrices when layout props values was atc', () => {
      const wrapper = shallow(
        <Price
          priceInput={{ ...priceInput6, yourPrice: '', vip: '10.99' }}
          type="abc"
          offerMessageOverride={mockCallBack}
          layout="atc"
          className="atc"
          isVip={true}
        />
      );

      expect(wrapper.find('.atc').length > 0).toBe(true);
    });

    test('should not render messageVip className when offerMessage and offerMessageOverride is not given', () => {
      const wrapper = shallow(
        <Price priceInput={{ ...priceInput, offerMessage: '', sale: '' }} type="abc" layout="atc" />
      );

      expect(wrapper.find('.messageVip').length).toBe(0);
    });
  });
});
