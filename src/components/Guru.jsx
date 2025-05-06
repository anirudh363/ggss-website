import React from 'react';
import GuruImg from '../assets/guru.jpg';

export default function Guru() {
  return (
    <div className='guru component'>
        <div className="guru__text">
            <h2 className='subheading'>Guru Vandanam at Sringeri</h2>
            <p>Guruvandanam at Sringeri is an annual event that marks the beginning of GGSS's activities for the year. On the first Sunday after Gurupoornima, all staff and students, accompanied by our guru, travel to Sringeri to seek the blessings of the Jagadguru of Sringeri Shankaracharya Mahasamsthanam.

The day begins with a visit to the sacred river Tunga for ablutions, followed by darshan of the kshetra-devatas: Sharadamba, Vidyashankara, and Toranaganapati. Special offerings, including coconuts to Torana Ganapati, are made. We then visit the gurubhavana and memorials of past Jagadgurus, where we receive darshan of the Jagadguru and partake in prasadam at the bhojanashala.

In the evening, the Jagadguru meets the GGSS devotees, where we present a small program with shloka recitation, Bhagavadgita recitation, a Sanskrit drama, and offer respects to scholars. The program concludes with blessings and mantrakshatas from the Jagadguru.

The day ends with another darshan of Sharadamba and participation in the Dindi utsavam before returning to Bangalore.</p>
            <div className="know_more">
            <a href="#">Know More</a>
            </div>
        </div>
        <div className="guru__image">
            <img src={GuruImg} alt="Guru Image" />
        </div>
    </div>
  )
}
