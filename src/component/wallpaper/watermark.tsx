import React from 'react';
//! TODO: 补充测试用例
const Watermark: React.FC = () => {
    const watermarkRows = 15; // 水印行数
    const watermarkCols = 15; // 水印列数
    const watermarks = [];

    for (let i = 0; i < watermarkRows; i++) {
        for (let j = 0; j < watermarkCols; j++) {
            watermarks.push(
                <div
                    key={`${i}-${j}`}
                    style={{
                        position: 'absolute',
                        top: `${i * 100}px`,
                        left: `${j * 200}px`,
                        fontSize: '24px',
                        color: 'rgba(0, 0, 0, 0.07)',
                        transform: 'rotate(-45deg)',
                        whiteSpace: 'nowrap',
                        overflow: 'visible',
                        textOverflow: 'clip',
                    }}
                >
                    carline for fun
                </div>
            );
        }
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                zIndex: -1,
            }}
        >
            {watermarks}
        </div>
    );
};

export default Watermark;