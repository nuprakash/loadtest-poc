import { updateSessionInfo, getSessionInfo } from '../SessionInfo';
import SessionInfoService from '@Services/sessionInfoService/SessionInfoService';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { UPDATE_SESSION_INFO } from '@Redux/actionTypes/SessionInfo';
import logger from '@Utils/Logger';

describe('SessionInfoAction', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  logger.error = jest.fn();

  it('should return request payload', () => {
    const request = {
      cartQuantity: 2,
    };

    const expectedPayLoad = {
      cartQuantity: 2,
    };

    const response = updateSessionInfo(request);

    expect(response.payload).toStrictEqual(expectedPayLoad);
  });

  it('Should dispatch UPDATE_SESSION_INFO when response success value was true', async () => {
    const mockResponse = {
      payload: {
        success: true,
        state: {
          member: 'vip',
        },
        membershipLevel: 'VIP2',
      },
    };

    jest
      .spyOn(SessionInfoService, 'invoke')
      .mockImplementation(() => Promise.resolve(mockResponse));
    await store.dispatch(getSessionInfo());
    const Action = store.getActions()[0];

    expect(Action).toMatchObject({ type: UPDATE_SESSION_INFO });
  });

  it('Should not dispatch UPDATE_SESSION_INFO when response success value was false', async () => {
    const mockResponse = {
      payload: {
        success: false,
      },
    };

    jest
      .spyOn(SessionInfoService, 'invoke')
      .mockImplementation(() => Promise.resolve(mockResponse));
    await store.dispatch(getSessionInfo());
    const Action = store.getActions()[0];

    expect(Action).toBe(undefined);
  });

  it('Should catch error when response was failed', async () => {
    const mockError = 'CONNECTION_BROKEN';
    jest.spyOn(SessionInfoService, 'invoke').mockImplementation(() => Promise.reject(mockError));
    await store.dispatch(getSessionInfo());
    const expectedError = logger.error.mock.calls[0][1];

    expect(expectedError).toBe(mockError);
  });
});
