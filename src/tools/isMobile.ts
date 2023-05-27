export function isMobile() {
  const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isScreenWidthLessThan900 = window.innerWidth < 900;

  return isMobileUserAgent || isScreenWidthLessThan900;
}