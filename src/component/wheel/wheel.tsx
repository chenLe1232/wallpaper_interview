import { useCallback, useRef, useState } from 'react';
import './wheel.css'
import { debounce } from 'lodash-es';
import { Message } from '@arco-design/web-react';
import { calculateRotationAngle } from './lucky';
// 奖品列表
const prizeMap: any = {
    1: '华为平板',
    2: '20元现金',
    3: '10元现金',
    4: '谢谢参与',
    5: '5元现金',
    6: '免单',
    7: '3元现金',
    8: '2元现金',
}
const WheelRotate = () => {
    const wheelRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(1);
    const [isStart, setIsStart] = useState(false);
    // 点击开始 进行转盘旋转
    const start = useCallback(() => {
        if (isStart) return;
        let timer: any = null;
        // 获取wheelRef的dom元素
        const wheel = wheelRef.current;
        if (wheel) {
            //  用时4s;
            wheel.style.transition = 'all 4s ease-in-out';
            const { rotateAngel, index } = calculateRotationAngle(count);
            console.log('%c 🍖 rotateAngel: ', 'font-size:20px;background-color: #FCA650;color:#fff;', rotateAngel, index);
            wheel.style.transform = `rotate(${rotateAngel}deg)`;
            setIsStart(true);
            timer = setTimeout(() => {
                Message.success(`恭喜你抽中了${prizeMap[`${index}`]}`);
                setCount(prev => prev + 1);
                setIsStart(false);
            }, 4002)
        }
        return () => { clearTimeout(timer) }
    }, [count, isStart])
    return (
        <div className="wheel">
            <div className="wheel-container">
                <ul className="wheel-bulb">
                    {Array.from({ length: 16 }, (_, index) => (
                        <i
                            key={index}
                            className={`bulb bulb-${index}`}
                            style={{ transform: `rotate(${index * 22.5}deg)` }}
                        ></i>
                    ))}
                </ul>
                <div
                    ref={wheelRef}
                    id="wheel-bg"
                    className="wheel-bg"
                    style={{
                        backgroundImage:
                            "url(https://funimg.pddpic.com/jinbao/roulette_old_user_v5.png)",
                    }}
                ></div>
            </div>
            <div
                className="pointer"
                style={{
                    backgroundImage:
                        "url(https://funimg.pddpic.com/jinbao/roulette_pointer.png)",
                }}
            >
                <div className="pointer-desc start" onClick={debounce(start, 4100, { leading: true })}>
                    <div
                        className="desc"
                        style={{
                            backgroundImage:
                                "url(https://funimg.pddpic.com/jinbao/roulette_click_btn.png)",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default WheelRotate;