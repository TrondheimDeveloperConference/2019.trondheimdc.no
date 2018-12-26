//@flow
import * as React from 'react';
import './Banner.less';
import TDCLogo_white from '../../assets/logo/logo-white.svg';

function Banner() {
    return (
        <div className="banner">
            <div className='logos'>
                <img className='tdclogo' src={TDCLogo_white} alt="TDC" />
                <h1 className='tdctext'>Trondheim Developer Conference</h1>
            </div>

            <div className="logo-text">
                <h2>CLARION CONGRESS 21. OCTOBER 2019</h2>
            </div>
        </div>
    );
}

export default Banner;