import watchOuterClicks from '../WatchOuterClicks';
import {
  useEffect as useEffectMock,
  useLayoutEffect as useBrowserLayoutEffectMock,
  useRef as useRefMock,
} from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest.fn(),
  useEffect: jest.fn(),
  useLayoutEffect: jest.fn(),
}));

describe('WathOuterClicks', () => {
  let map = {};
  let removemap = {};
  let mockCallBack;

  beforeEach(() => {
    mockCallBack = jest.fn();
    mockCallBack.contains = jest.fn();
    useRefMock.mockReturnValue({ current: (func) => func() });
    useEffectMock.mockImplementationOnce((func) => func());
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb;
    });
  });

  it('should trigger callback function on click only when watch value was true', () => {
    useBrowserLayoutEffectMock.mockImplementationOnce((func) => func());
    watchOuterClicks(true, mockCallBack);
    map.click({ target: document.body });

    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should not trigger callback function on click when watch value was false', () => {
    useBrowserLayoutEffectMock.mockImplementationOnce((func) => func());
    watchOuterClicks(false, mockCallBack);
    map.click({ target: document.body });

    expect(mockCallBack).not.toHaveBeenCalled();
  });

  it('should trigger remove Event Listener when component unmounts', () => {
    let cleanUpFunction;
    useBrowserLayoutEffectMock.mockImplementationOnce((func) => {
      cleanUpFunction = func();
    });
    watchOuterClicks(true, mockCallBack);

    expect(removemap).toEqual({});

    document.removeEventListener = jest.fn((e, cb) => {
      removemap[e] = cb;
    });
    cleanUpFunction();

    expect(removemap).not.toEqual({});
  });

  it('should check innerRef value when not give callback function', () => {
    useBrowserLayoutEffectMock.mockImplementationOnce((func) => func());
    const watchOuterClicksWrapper = watchOuterClicks(true);
    map.click({ target: document.body });

    expect(watchOuterClicksWrapper.current).toBeUndefined();
  });
});
