
import { Spin } from '@arco-design/web-react';
import { Category } from '@/types/category'
import { useWallpaperData } from '@/hooks/useWallpaperData'
import Img from './img'
import { useCallback, useState } from 'react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import CategorySelect from './category';

import Watermark from './watermark';

function App() {
    const [pageStart, setPageStart] = useState(0);
    const [loadMore, setLoadMore] = useState(false);
    const [category, setCategory] = useState(Category.beauty);
    const wallpaperData = useWallpaperData(category, pageStart, 10, loadMore, () => setLoadMore(false));

    const loadMoreFunction = useCallback(() => {
        setLoadMore(true);
        setPageStart((prevPageStart) => prevPageStart + 10);
    }, []);

    useInfiniteScroll(loadMoreFunction);
    // 放开手机端的展示
    // const isMobileFlag = isMobile();
    // //! TODO: 没有resize监听
    // if (isMobileFlag) return <MobileError />
    // TODO: 样式 后续不在使用style 接入tailwindcss 进行样式管理
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: ' linear-gradient(135deg, rgba(251, 194, 235, 0.8), rgba(166, 193, 238, 0.8))',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
        }}>
            <Spin loading={wallpaperData?.length === 0}>
                <div style={{
                    minHeight: '100vh',
                    width: '100%',
                }}>
                    {wallpaperData?.length ? <CategorySelect setCategory={setCategory} /> : null}
                    <Img data={wallpaperData} />
                </div>
                <Watermark />
            </Spin>
        </div>

    )
}

export default App
