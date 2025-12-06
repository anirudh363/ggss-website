import React from 'react';
import JgnImg from '../assets/jgn.png';
import { Link } from 'react-router-dom';

export default function Jagannatha() {
  return (
    <div className='guru component'>
        <div className="guru__text">
            <h2 className='subheading'>Jagannatha Rathotsava</h2>
            <p>Every year, coinciding with the world-renowned Rathotsava at Puri, GGSS conducts its own Jagannatha Rathotsava with great devotion and enthusiasm. Students from all branches gather to participate in this sacred tradition, chanting shlokas, singing bhajans, and offering heartfelt praises to Lord Jagannatha. The atmosphere is filled with vibrant energy as the chariot is pulled with reverence and joy, symbolizing collective seva and surrender. This annual celebration not only fosters devotion and unity among students but also keeps alive the timeless cultural and spiritual heritage passed down through our parampara.</p>
            {/* <div className="know_more">
            <Link to="guruvandanam">Know More</Link>
            </div> */}
        </div>
        <div className="guru__image">
            <img src={JgnImg} alt="Jagannatha Image" />
        </div>
    </div>
  )
}
