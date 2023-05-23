import React from 'react';
import { Image, Tooltip } from '@arco-design/web-react';
import './img.css';

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

    return (
        <div className='img-wrapper'>
            <div className="grid-container">
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