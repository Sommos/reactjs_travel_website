import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out These EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src='images/img-9.jpg' text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' />
                    <CardItem src='images/img-2.jpg' text='Travel through the Islands of Bali in a private cruise' label='Luxury' path='/services' />
                </ul>
                <ul className='cards__items'>
                    <CardItem src='images/img-3.jpg' text='Set sail across the atlantic in this private ship' label='Ship' path='/services' />
                    <CardItem src='images/img-4.jpg' text='This private island comes complete with a personal football field' label='Football' path='/services' />
                    <CardItem src='images/img-5.jpg' text='Explore the metropolitan Chicago area filled with restaurants' label='Chicago' path='/services' />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;