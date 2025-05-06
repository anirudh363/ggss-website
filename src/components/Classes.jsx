import React from 'react';
import ClassImage from '../assets/class.jpg';
import { Link } from 'react-router-dom';

export default function Classes() {
  return (
    <div className='class component'>
        
              <div className="class__text">
                <ul>
                    <li> <span className='subheading'>Shloka Classes:</span> <br />
                    <p>Students begin with simple Sanskrit verses from Stuthikusumaanjali, a compilation of stotras by Adi Shankaracharya, sages, and Sringeri gurus. They also learn the Bhagavad Gita, Soundaryalahari, Venkatesha Suprabhatam, Mukundamala, Sankshepa Ramayanam, and more. In some branches, traditional Namasankeertanams and Ashtapadis are taught following the praacheena bhajana sampradaya.</p>
                    </li>
                    <li> <span className='subheading'>Sanskrit Classes:</span> <br /> 
                    <p>Children are first taught to read and write in the Devanagari script. They then move on to graded lessons and vocabulary builders like the Chitrapadakosha. Once ready, they are trained for Sanskrit exams by Surasaraswathi Sabha and Bharatiya Vidya Bhavan, with some also appearing for advanced board and government exams.</p>
                    </li>
                </ul>
                <div className="know_more">
                <Link to="/classes">Know More</Link>
              </div>
              </div>
              <div className="class__image">
                <img src={ClassImage} alt="Class Image" />
              </div>
    </div>
  )
}
