/*
 * File: BrandNames.test.js
 * Project: webapp-cdeals
 * Created Date: Tuesday, April 6th 2021, 11:03:54 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import BrandDetails from '@Mocks/brandPLP/Brand.json';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import BrandNames from '../BrandNames';

describe('<BrandNames />', () => {
  it('Check BrandNames component is rendered', () => {
    const brandListWrapper = shallow(
      <BrandNames
        brands={BrandDetails}
        LinkTag={(item) => {
          return item.href, item.children;
        }}
      />
    );
    const brandListItem = brandListWrapper.find('Col');
    expect(brandListItem.length > 0).toBeTruthy();
  });

  it('Check BrandNames component is not rendered', () => {
    const brandListWrapper = shallow(<BrandNames brands={{}} LinkTag={() => {}} />);
    const brandListItem = brandListWrapper.find('Col');

    expect(brandListItem.length == 0).toBeTruthy();
  });

  it('Check BrandNames component with custom props', () => {
    const brandListWrapper = shallow(
      <BrandNames
        brands={BrandDetails}
        LinkTag={() => {}}
        className="BrandContainer"
        title="BrandTitle"
      />
    );

    expect(brandListWrapper.find('.BrandContainer').length > 0).toBeTruthy();
    expect(brandListWrapper.find('.brandsTitle').children().text()).toBe('BrandTitle');
  });

  it('should set default tab as active tab', async () => {
    let brandListWrapper;
    await act(async () => {
      brandListWrapper = mount(
        <BrandNames
          brands={BrandDetails}
          LinkTag={(item) => {
            return item.href, item.children;
          }}
          defaultTab="B"
        />
      );
    });
    brandListWrapper.update();

    expect(brandListWrapper.find('h3.brandsTabItemActive').at(0).children().text()).toBe('B');
  });

  it('should set active class for selected brand item', async () => {
    let brandListWrapper;
    await act(async () => {
      brandListWrapper = mount(
        <BrandNames
          brands={BrandDetails}
          LinkTag={(item) => {
            return item.href, item.children;
          }}
        />
      );
    });
    brandListWrapper.update();
    brandListWrapper.find('Col.brandsTabItem').at(1).simulate('click');

    expect(brandListWrapper.find('h3.brandsTabItemActive').at(0).children().text()).toBe('A');
  });
});
