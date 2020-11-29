import React from 'react'
import '../../App.css'
import ReactPlayer from 'react-player'

export default function Products(){
    return (
    <>
    <div className='hero-container'>
            <ReactPlayer 
            className='react-player'
            width="100%"
            height="100%"
            playing="true"
            url="images/wellmark.mp4"
            loop
            />
        </div>
    <h1 className="products"> PRODUCTS</h1>
    </>
    );
}