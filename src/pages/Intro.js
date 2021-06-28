import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import version from '@images/versioning.png'

import '@styles/intro.scss';

const Intro = () => {
    return (
        <div className="centered-container">
            <img className="app-version" src={version} alt="version-image" />

            <div className="hide"></div>
            <iframe src='https://my.spline.design/untitled-2e527db8a1daad763bf5446f9a024746/' frameBorder="0" width='100%' height='100%'></iframe>
            <div id="content">
                <h1 className="rich-text">Hi
                    <span className="rich-text-2">, my name is Shane.</span></h1>
                <h3 className="desc-header">[ Drag mouse to rotate ]</h3>
                <div className="in-touch-btn">Get in touch</div>
            </div>

            <div className="bottom-arrow">
                <a href="#about"><FontAwesomeIcon className="icon" icon={faChevronDown} /></a>
            </div>
        </div>
    )
}

export default Intro;