import React from 'react';
import DeviImg from '../assets/devi.png';
import { Link } from 'react-router-dom';

export default function Navaratri() {
  return (
    <div className='guru component'>
        <div className="guru__text">
            <h2 className='subheading'>Navaratri</h2>
            <p>During Navaratri, GGSS takes part in the grand festivities at the Vyalikaval Ram Mandir, where each of the nine days features a unique and beautifully crafted alankāra for Goddess Sharadamba, reflecting Her various forms and divine attributes. Students and devotees gather daily to witness these sacred adornments and offer prayers. Every evening, the celebrations are further enriched with cultural programs dedicated to Devi—featuring music, dance, and drama performed by talented students and invited artists. These nine days of devotion, art, and tradition create a spiritually uplifting atmosphere and help inculcate reverence, discipline, and cultural appreciation among all participants.</p>
            {/* <div className="know_more">
            <Link to="guruvandanam">Know More</Link>
            </div> */}
        </div>
        <div className="guru__image">
            <img src={DeviImg} alt="Devi Image" />
        </div>
    </div>
  )
}
