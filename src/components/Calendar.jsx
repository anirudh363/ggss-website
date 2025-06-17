import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import MaataImg from '../assets/maata.png';

export default function Calendar() {
  const events = [
    { date: 'June 20, 2025', title: 'Bhagavad Gita Session - Chapter 2', time: '6:00 PM' },
    { date: 'June 25, 2025', title: 'Sanskrit Story Recital', time: '5:30 PM' },
    { date: 'June 28, 2025', title: 'Monthly Satsang', time: '7:00 PM' },
    { date: 'June 20, 2025', title: 'Bhagavad Gita Session - Chapter 2', time: '6:00 PM' },
    { date: 'June 25, 2025', title: 'Sanskrit Story Recital', time: '5:30 PM' },
    { date: 'June 28, 2025', title: 'Monthly Satsang', time: '7:00 PM' },
    { date: 'June 20, 2025', title: 'Bhagavad Gita Session - Chapter 2', time: '6:00 PM' },
    { date: 'June 25, 2025', title: 'Sanskrit Story Recital', time: '5:30 PM' },
    { date: 'June 28, 2025', title: 'Monthly Satsang', time: '7:00 PM' },
    { date: 'June 20, 2025', title: 'Bhagavad Gita Session - Chapter 2', time: '6:00 PM' },
    { date: 'June 25, 2025', title: 'Sanskrit Story Recital', time: '5:30 PM' },
    { date: 'June 28, 2025', title: 'Monthly Satsang', time: '7:00 PM' },
    { date: 'June 20, 2025', title: 'Bhagavad Gita Session - Chapter 2', time: '6:00 PM' },
    { date: 'June 25, 2025', title: 'Sanskrit Story Recital', time: '5:30 PM' },
    { date: 'June 28, 2025', title: 'Monthly Satsang', time: '7:00 PM' },
    { date: 'June 20, 2025', title: 'Bhagavad Gita Session - Chapter 2', time: '6:00 PM' },
    { date: 'June 25, 2025', title: 'Sanskrit Story Recital', time: '5:30 PM' },
    { date: 'June 28, 2025', title: 'Monthly Satsang', time: '7:00 PM' },
    // Add more events here
  ];

  return (
    <section className="calendar component">
      <div className="calendar-left">
        <h2>Upcoming Events</h2>
        <div className="event-scroll">
          <ul className="event-list">
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <span className="event-date">{event.date}</span>
              <div className="event-details">
                <span className="event-title">{event.title}</span>
                <span className="event-time">{event.time}</span>
              </div>
            </li>
          ))}
        </ul>
        </div>
        
      </div>

      <div className="calendar-right">
        <h3>Stay Connected</h3>
        <p>Follow us on social media for more updates and event details:</p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </section>
  );
}
