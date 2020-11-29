import React from 'react'
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';
import ReactPlayer from 'react-player'

function HeroSection() {
    return (
        <div className='hero-container'>
            <ReactPlayer 
            className='react-player'
            width="100%"
            height="100%"
            playing="true"
            url="https://www.youtube.com/embed/6718s7ds35w"
            loop
            muted
            /> 
            <h1>Your second home is here.</h1>
            <p>"Computer science is no more about computers than astronomy is about telesopes"-Edsger W.Dijkstra</p>
            <p>What are you waiting for?</p>
            
            <div className="hero-btns">
                <Button
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Get Started.
                </Button>
                <Button
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Watch Trailer <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
