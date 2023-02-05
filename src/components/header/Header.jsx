import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

function Header(props) {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Mahesh Bhukya</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt='me'/>
                </div>
                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;