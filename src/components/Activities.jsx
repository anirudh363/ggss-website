import React from 'react';
import ActivitiesImg from '../assets/activities.png'; 

export default function Activities() {
  return (
    <div className='activities component'>
      <div className="activities__image">
        <img src={ActivitiesImg} alt="Spiritual Activities" />
      </div>
      <div className="activities__text">
        <span className='subheading'>Spiritual Activities</span>
        <ul>
          <li>Students learn about India's festivals and their spiritual significance.</li>
          <li><strong>Shankara Jayanthi</strong> is celebrated in May with class pooja and guru veneration.</li>
          <li><strong>Ganesha Chaturthi</strong> and <strong>Krishna Janmashtami</strong> are celebrated with a combined pooja in Aug–Sep.</li>
          <li>Rathotsavams are held at Vyalikaval:
            <ul>
              <li><strong>Jagannatha Rathayatra</strong> in July</li>
              <li><strong>Sharadamba Rathotsavam</strong> in October</li>
            </ul>
          </li>
          <li>Students and families chant shlokas, offer worship, and celebrate with devotion.</li>
          <li>GGSS collaborates with trusts like P.N. Ramachandra Iyer Trust and Sanatana Dharma Samrakshana Parishad.</li>
        </ul>
        <div className="know_more">
          <a href="#">Know More</a>
        </div>
      </div>
    </div>
  );
}
