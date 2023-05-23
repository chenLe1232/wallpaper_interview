import { useEffect } from 'react';
//! TODO: 补充测试用例
const useInfiniteScroll = (loadMoreFunction: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreFunction();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMoreFunction]);
};

export default useInfiniteScroll;