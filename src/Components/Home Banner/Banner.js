import './Banner.scss';
import HeaderInfo from './HeaderInfo/HeaderInfo';

import Slider from './Slider/Slider';

const Banner = () =>{
    return <div className='hero-banner'>
        <div className='content'>
            <div className='header-info'>
                {/* <HeaderInfo/> */}
            </div>
            <div className='slider-images'>
                <Slider/>
            </div>
        </div>
    </div>
}
export default Banner;