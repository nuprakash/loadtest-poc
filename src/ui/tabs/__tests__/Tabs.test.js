import { shallow, mount } from 'enzyme';
import Tabs from '../Tabs';
import { waitForComponentToPaint } from '@Utils/Testing';

describe('<Tabs />', () => {
  const tabList = ['LOG IN', 'NEW ACCOUNT'];
  const mockCallBack = jest.fn();

  it('should render with default props', () => {
    const tabWrapper = shallow(
      <Tabs tabList={[]} activeTab="">
        <h1>Tab Children</h1>
      </Tabs>
    );

    expect(tabWrapper.find('Typography').props().variant).toBe('small');
  });

  it('should render with custom props', () => {
    const tabWrapper = shallow(
      <Tabs tabList={tabList} activeTab={tabList[0]} className="TabItems" typography="h1">
        <h1>Tab Children</h1>
      </Tabs>
    );

    expect(tabWrapper.find('Typography').props().variant).toBe('h1');

    expect(tabWrapper.find('.TabItems').length > 0).toBeTruthy();

    expect(tabWrapper.find('h1').text()).toBe('Tab Children');
  });

  it('should render Tab with TabItem List', () => {
    const tabWrapper = mount(
      <Tabs tabList={tabList} activeTab={tabList[0]}>
        <h1>Tab Children</h1>
      </Tabs>
    );
    waitForComponentToPaint(tabWrapper);

    expect(tabWrapper.find('.tabItem').length > 0).toBeTruthy();
  });

  it('should trigger callBack function when tabItem was clicked', () => {
    const tabWrapper = mount(
      <Tabs tabList={tabList} activeTab={tabList[0]} onClick={mockCallBack}>
        <h1>Tab Children</h1>
      </Tabs>
    );
    waitForComponentToPaint(tabWrapper);

    tabWrapper
      .find('.tabItem')
      .at(0)
      .simulate('click', { target: { value: 'LOG IN' } });

    expect(mockCallBack).toHaveBeenCalled();
  });
});
