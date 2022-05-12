import { updatePageDimensions, updateScrollPosition, updateDeviceType } from '../DeviceInfo';

describe('DeviceInfoAction', () => {
  it('should return request payload updatePageDimensions', () => {
    const request = {
      height: 200,
      width: 100,
    };

    const expectedPayLoad = {
      height: 200,
      width: 100,
    };

    const response = updatePageDimensions(request);

    expect(response.payload).toStrictEqual(expectedPayLoad);
  });

  it('should return request payload updateDeviceType', () => {
    const request = {
      isMobile: true,
      isDesktop: false,
    };

    const expectedPayLoad = {
      isMobile: true,
      isDesktop: false,
    };

    const response = updateDeviceType(request);

    expect(response.payload).toStrictEqual(expectedPayLoad);
  });

  it('should return request payload updateScrollPosition', () => {
    const request = {
      scrollTop: 200,
    };

    const expectedPayLoad = {
      scrollTop: 200,
    };

    const response = updateScrollPosition(request);

    expect(response.payload).toStrictEqual(expectedPayLoad);
  });
});
