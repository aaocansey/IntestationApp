import React from 'react';
import cardImage1 from '../images/cardImage1.PNG';
import cardImage2 from '../images/cardImage2.jpg';
import cardImage3 from '../images/cardImage3.png';

const Cards = () => {
    return (
        <div className='cardContainer'>
            <div className='Card'>
                <img className='cardImage' src={cardImage1} alt="" />
                <p className='cardTitle'>How It Works</p>
                <div className='cardBody'>
                    <video src="" alt='card video'></video>
                </div>
            </div>
            <div className='Card'>
                <img className='cardImage' src={cardImage2} alt="" />
                <p className='cardTitle'>Payment Methods</p>
                <div className='cardBody'>
                    <video src="" alt='card video'></video>
                </div>
            </div>
            <div className='Card'>
                <img className='cardImage' src={cardImage3} alt="" />
                <p className='cardTitle'>FAQ</p>
                <div className='cardBody'>
                    <video src="" alt='card video'></video>
                </div>
            </div>
        </div>
    );
}

export default Cards;
