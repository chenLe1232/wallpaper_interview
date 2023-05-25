import './index.css'
import WheelRotate from './wheel';

const Wheel = () => {
    return <div className='duo-roulette-wrapper'>
        <div className='part-roulette'>
            <img src="https://funimg.pddpic.com/jinbao/roulette_bg.png" className="main-bg" />
            <img src="https://funimg.pddpic.com/jinbao/roulette_main_title.png" className="main-title" />
            <img src="https://funimg.pddpic.com/jinbao/roulette_bg_coin.png" className="main-bg-coin" />
            <WheelRotate />
        </div>
    </div>

}


export default Wheel;