import React from 'react';
import { Link } from 'react-router-dom';
import MaataImg from '../assets/maata.png'; 

export default function Maatha() {
  return (
    <section className="about component">
      <div className="about__image">
        <img src={MaataImg} alt="Smt. Ananthalakshmi Natarajan" />
      </div>
      <div className="maatha__text">
        <span className="subheading">Our Guru - Maatha</span>
        <p>
          Geetha Govinda Samskrita Sangha was founded by Gurupaadadhooli Smt. Ananthalakshmi Natarajan, known in short as Anantham, and addressed affectionately as 'maataa' by all her beloved students. She has worked untiringly for spreading the knowledge of Sanskrit and our shastras since several decades.
        </p>
        <p>
          She represents a rare combination of Sanskrit, shastras, Vedic knowledge, music, mathematics, literature and general knowledge. She hails from a very cultured and intellectual family. Her father, an astute mathematician, and her mother, a great Sanskrit Vidushi, have laid foundation for her present day status.
        </p>
        <p>
          She learnt Carnatic music from Sri. Balaganesha Iyer for 15 years from the age of seven. Smt. Ananthalakshmi Natarajan has done her post-graduation in mathematics and is a retired teacher of Stella Maris High School, Vyalikaval, Bangalore.
        </p>
        <div className="know_more">
        <Link to="/maatha">Know More</Link>
      </div>
      </div>
      
    </section>
  );
}


