import React from "react";
import './HeaderInfo.scss';
import Warranty from '../../../assests/warrentyImg.png';

function HeaderInfo() {
    return(
        <div className="headerBack">
            <div className="warrantyBox">
                <img src={Warranty}/>
            </div>
        </div>
    )
}
export default HeaderInfo;