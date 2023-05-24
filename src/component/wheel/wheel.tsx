import { useCallback, useRef, useState } from 'react';
import './wheel.css'
import { debounce } from 'lodash-es';
import { Message } from '@arco-design/web-react';
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
    // 点击开始 进行转盘旋转
    const start = useCallback(() => {
        let timer: any = null;
        // 获取wheelRef的dom元素
        const wheel = wheelRef.current;
        if (wheel) {
            // 转盘8等分，初始化角度为23deg, 默认转动6圈 用时4s;
            wheel.style.transition = 'all 4s ease-in-out';
            // 假设转动6圈，每圈360deg，总共2160deg
            // 因为8等分，假设要求转到第五个等分，那么就是第五个等分的中间位置，也就是第五个等分的中间角度，也就是第五个等分的角度+22.5deg
            //假设转到 1- 8 中某一个，实际是后端返回 这里采用随机数模拟 
            const random = Math.floor(Math.random() * 8) + 1;
            // 旋转角度 = 2160deg 圈数 * count+ 23deg 初始角度  + random  * 45deg 旋转角度 + 22.5deg 中间角度
            wheel.style.transform = `rotate(${2160 * count + 23 + (8 - random) * 45 + 22.5}deg)`;
            console.log('%c 🍉 random: ', 'font-size:20px;background-color: #FCA650;color:#fff;', random);
            timer = setTimeout(() => {
                Message.success(`恭喜你抽中了${prizeMap[`${random}`]}`);
                setCount(prev => prev + 1)
            }, 4002)
        }
        return () => { clearTimeout(timer) }
    }, [count])
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