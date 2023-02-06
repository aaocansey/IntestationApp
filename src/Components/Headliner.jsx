import React from 'react';
import welcomeImage from '../images/headlinerImage.png'
import '../pages/Home/Home.css'
const Headliner = () => {
    return (
        <div className='headliner'>
            <div className='welcomeText'>
                <p className='line One'>Get Introduced</p>
                <p className='line Two'>With Ease Anywhere</p>
                <p className='line Three'>Any Time</p>
                <button>Learn More</button>
            </div>
            <div>
            <img src={welcomeImage} alt="" />
            </div>
        </div>
    );
}

export default Headliner;
