import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Quantity from '../Quantity';

const initialQty = 1;
const initialQty10 = 999;
const handleOnQtyChange = jest.fn();

describe('<Quantity />', () => {
  it('should disable Quantity Buttons if isDisabled props was true', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<Quantity isDisabled={true} />);
    });

    expect(wrapper.find('.quantityDisabled').length).toBeGreaterThan(0);
  });

  it('should disabled Decrease Quantity button if quantity reached MinQuantity', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <Quantity initialQty={initialQty} minQty={1} handleOnQtyChange={handleOnQtyChange} />
      );
    });
    wrapper.update();

    expect(wrapper.find('button.quantityDecreaseBtn').props().disabled).toBe(true);
  });

  it('should disabled Increase Quantity button if quantity reached MaxQuantity', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <Quantity initialQty={initialQty10} maxQty={999} handleOnQtyChange={handleOnQtyChange} />
      );
    });
    wrapper.update();

    expect(wrapper.find('button.quantityIncreaseBtn').props().disabled).toBe(true);
  });

  it('should increment the qty value by 1 when increase quantity button was clicked', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<Quantity initialQty={initialQty} handleOnQtyChange={handleOnQtyChange} />);
    });
    wrapper.find('button.quantityIncreaseBtn').simulate('click');
    wrapper.update();

    expect(wrapper.find('.quantityVal').text()).toContain(initialQty + 1);

    expect(handleOnQtyChange).toHaveBeenCalled();
  });

  it('should decrement the qty value by 1 when decrease quantity button was clicked', async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(
        <Quantity initialQty={initialQty10} minQty={1} handleOnQtyChange={handleOnQtyChange} />
      );
    });
    wrapper.find('button.quantityDecreaseBtn').simulate('click');
    wrapper.update();

    expect(wrapper.find('.quantityVal').text()).toContain(initialQty10 - 1);

    expect(handleOnQtyChange).toHaveBeenCalled();
  });
});
