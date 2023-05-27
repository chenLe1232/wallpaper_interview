import React, { useCallback, useEffect } from 'react';
import { Image, Tooltip } from '@arco-design/web-react';
import './img.css';
import { isMobile } from '@/tools/isMobile';

interface WallpaperData {
    img: string;
    tag: string[];
    preview: string;
}

interface ImgProps {
    data: WallpaperData[];
}
//! TODO: 补充测试用例
const Img: React.FC<ImgProps> = ({ data }) => {
    const [isPhone, setIsPhone] = React.useState(false);
    // 监听页面resize,如果变化则调用 isMobile 如果返回值与 isPhone 不一致则更新 isPhone
    const resize = useCallback(() => {
        const isPhoneFlag = isMobile();
        if (isPhoneFlag !== isPhone) {
            setIsPhone(isPhoneFlag);
        }
    }, [isPhone])
    useEffect(() => {
        // 初始调用一次
        resize();
        // 注册resize监听
        window.addEventListener('resize', resize);
    }, [])
    return (
        <div className='img-wrapper'>
            <div className="grid-container" style={{
                gridTemplateColumns: `repeat(${isPhone ? 1 : 2}, 1fr)`,
            }}>
                {data.map((item, index) => (
                    <div key={item.img} className="img-container">
                        <Image
                            src={item.img}
                            alt={`img-${index}`}
                            width="350"
                            height="540"
                            loading="lazy"
                            loader={<img
                                width="350"
                                height="540"
                                src={item.preview}
                                style={{
                                    filter: 'blur(5px)',
                                }}
                            />}
                        />
                        <Tooltip content={item.tag.join(', ')} trigger="hover">
                            <div className="img-tag">{item.tag.join(', ')}</div>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Img;