import useBodyScrollLock from '../UseBodyScrollLock';
import { useLayoutEffect as useBrowserLayoutEffectMock } from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.fn(),
}));

describe('useBodyScrollLock', () => {
  it('should re-enable scrolling when component unmounts', () => {
    let cleanUpFunction;
    useBrowserLayoutEffectMock.mockImplementationOnce((func) => {
      cleanUpFunction = func();
    });
    useBodyScrollLock(false);
    cleanUpFunction();

    expect(document.body.style['overflow-y']).toBe('');
  });

  it('should check the body style when lock value was false', () => {
    useBrowserLayoutEffectMock.mockImplementationOnce((func) => func());
    useBodyScrollLock(false);

    expect(document.body.style['overflow-y']).toBe('');
  });

  it('should check the body style when lock value was true', () => {
    useBrowserLayoutEffectMock.mockImplementationOnce((func) => func());
    useBodyScrollLock();

    expect(document.body.style['overflow-y']).toBe('hidden');
  });
});
