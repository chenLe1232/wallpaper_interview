import { debounce } from 'lodash-es';
import { useCallback, useEffect } from 'react';
//! TODO: 补充测试用例
const MAGIC_HEIGHT = 540;
const useInfiniteScroll = (loadMoreFunction: () => void) => {
  const handleScroll = useCallback(() => {
    if (
      // 当滚动到底部时 - 2 * pic 高度自动加载下一批数据
      // ! 次计算可以提前加载图片，提高用户体验
      window.innerHeight + document.documentElement.scrollTop + MAGIC_HEIGHT * 2 >=
      document.documentElement.offsetHeight
      // window.innerHeight + document.documentElement.scrollTop ===
      // document.documentElement.offsetHeight
    ) {
      loadMoreFunction();
    }
  }, [loadMoreFunction]);
  useEffect(() => {


    window.addEventListener('scroll', debounce(handleScroll, 300));
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMoreFunction]);
};

export default useInfiniteScroll;