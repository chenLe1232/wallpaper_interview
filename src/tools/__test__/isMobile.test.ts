import { isMobile } from '../isMobile';

describe('isMobile', () => {

  // 当 userAgent 是移动设备时，返回 true
  test('returns true when userAgent is a mobile device', () => {
    const originalUserAgent = navigator.userAgent;
    Object.defineProperty(navigator, 'userAgent', {
      value: 'iPhone',
      writable: true,
    });

    expect(isMobile()).toBe(true);

    Object.defineProperty(navigator, 'userAgent', {
      value: originalUserAgent,
      writable: true,
    });
  });

  // 当屏幕宽度小于 900 时，返回 true
  test('returns true when screen width is less than 900', () => {
    const originalInnerWidth = window.innerWidth;
    Object.defineProperty(window, 'innerWidth', {
      value: 800,
      writable: true,
    });

    expect(isMobile()).toBe(true);

    Object.defineProperty(window, 'innerWidth', {
      value: originalInnerWidth,
      writable: true,
    });
  });
});