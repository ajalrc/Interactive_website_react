import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1> Why choose us?</h1>
            <div className='cards__container'>
                <div class='cards__wrapper'>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="The beauty of campus that dazzles your eyes."
                        label="Beauty"
                        path='/services'
                        />   
                         <CardItem
                        src="images/img-2.jpg"
                        text="Intense Research focused to make you ready for real world battles."
                        label="Research"
                        path='/services'
                        />  
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-3.png"
                        text="Find someone who wants you to succeed in you academic and personal life."
                        label="Brilliant minds"
                        path='/services'
                        />   
                         <CardItem
                        src="images/img-4.jpg"
                        text="Cool minds are always more than welcome to try some cool stuffs."
                        label="Exploration"
                        path='/services'
                        />  
                        <CardItem
                        src="images/img-8.jpg"
                        text="Small class size so the professor will be forced to remember your name."
                        label="Collaborative environment and attention"
                        path='/services'
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
