import React, { PureComponent } from 'react';
import './Hero.css';
import dragon from '../../assets/dragon.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img className='dra' src={dragon} alt="" />
            <h1><span>I'm Ahmed Bamuhriz,</span> Programer</h1>
            <p>Motivated young programmer seeking experience</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}

export default Hero