
import './App.css'
import { Category } from './types/category'
import { useWallpaperData } from './hooks/useWallpaperData'
import { Spin } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";
import Img from './component/img'
import { useCallback, useState } from 'react';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import CategorySelect from './component/category';
import MobileError from './component/error'
import { isMobile } from './tools/isMobile';
import Watermark from './component/watermark';

function App() {
  const [pageStart, setPageStart] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const [category, setCategory] = useState(Category.animal);
  const wallpaperData = useWallpaperData(category, pageStart, 10, loadMore, () => setLoadMore(false));

  const loadMoreFunction = useCallback(() => {
    setLoadMore(true);
    setPageStart((prevPageStart) => prevPageStart + 10);
  }, []);

  useInfiniteScroll(loadMoreFunction);
  const isMobileFlag = isMobile();
  //! TODO: 没有resize监听
  if (isMobileFlag) return <MobileError />
  return (
    <Spin loading={wallpaperData?.length === 0}>
      {wallpaperData?.length ? <CategorySelect setCategory={setCategory} /> : null}
      <Img data={wallpaperData} />
      <Watermark />
    </Spin>
  )
}

export default App
