import React from 'react';
import CampImg from '../assets/summercamp.jpg';

export default function Camp() {
  return (
    <div className='camp component'>
        <div className="camp__text">
            <h2 className='subheading'>Summer Camp</h2>
            <p>Our summer camp is a unique opportunity for children to immerse themselves in the rich traditions of our culture. Through engaging activities, they will learn about our heritage, values, and practices in a fun and interactive way.</p>
            <div className="know_more">
            <a href="#">Know More</a>
            </div>
        </div>
        <div className="camp__image">
            <img src={CampImg} alt="Camp Image" />
        </div>

    </div>
  )
}
