import { UPDATE_SESSION_INFO, CLEAR_SESSION_INFO } from '@Redux/actionTypes/SessionInfo';
import sessionInfoReducer, { initialState } from '../SessionInfo';

describe('SessionInfo reducer', () => {
  it('should return initial state', () => {
    const newState = sessionInfoReducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  it('should handle UPDATE_SESSION_INFO', () => {
    const newState = sessionInfoReducer(
      {},
      { type: UPDATE_SESSION_INFO, payload: { sessionId: '#189045' } }
    );

    expect(newState.sessionId).toEqual('#189045');
  });
  it('should handle CLEAR_SESSION_INFO', () => {
    const newState = sessionInfoReducer({}, { type: CLEAR_SESSION_INFO });

    expect(newState).toEqual({});
  });
});
