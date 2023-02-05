import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FiDribbble} from 'react-icons/fi';

function HeaderSocials(props) {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/mahesh-bhukya-78bba01a3/' target="_blank" rel='noreferrer' ><BsLinkedin/> </a>
            <a href='https://github.com/maheshasiram' target="_blank" rel='noreferrer'><BsGithub /> </a>
            <a href='http://dribble.com' target="_blank" rel='noreferrer'><FiDribbble /> </a>
        </div>
    );
}

export default HeaderSocials;