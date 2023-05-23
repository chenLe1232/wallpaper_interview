export function isMobile() {
    // 检查链接中是否有 debug=1
    const hasDebugFlag = window.location.search.includes('debug=1');
  
    // 如果有 debug=1，返回 false
    if (hasDebugFlag) {
      return false;
    }
  
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isScreenWidthLessThan900 = window.innerWidth < 900;
  
    return isMobileUserAgent || isScreenWidthLessThan900;
  }