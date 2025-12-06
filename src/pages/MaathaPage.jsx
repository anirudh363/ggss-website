import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';

import MaathaImg from '../assets/maata-2.png';

// Inline images
import Inline1 from '../assets/maata-alt-1.jpeg';
import Inline2 from '../assets/maata-alt-2.jpeg';

// Gallery images
import G1 from '../assets/maata-alt-3.jpeg';
import G2 from '../assets/maata-alt-4.jpeg';
import G3 from '../assets/maata-alt-5.jpeg';
import G4 from '../assets/maata-alt-6.jpeg';
import G5 from '../assets/maata-alt-7.jpeg';
import G6 from '../assets/maata-alt-8.jpeg';

import "./MaathaPage.css"

export default function MaathaPage() {
  return (
    <div className='maata-page page'>

      <HeroWithoutStrip page={{ title: "Our Guru - Maatha" }} />

      {/* Main portrait image */}
      <div className="maata-image">
        <img src={MaathaImg} alt="Maatha" />
      </div>

      <h1>SMT. ANANTHALAKSHMI NATARAJAN</h1>
      <h2>(1943 - 2023)</h2>
      <h3>Founder – Shri. P.N. Ramachandra Iyer Trust, Bangalore.</h3>
      <h3>Founder – Geeta Govinda Samskrita Sangha</h3>

      <section className='about component'>
        <div className='about__text'>

          <p>
            Gurupaadadhooli Vid. Ananthalakshmi Natarajan, known in short as Anantham,
            and addressed affectionately as 'Maataa' (mother), has worked untiringly for
            spreading the knowledge of Samskritam, our shastras, Bharatiya Samskara and
            Shastric culture since several decades. Smt. Ananthalakshmi Natarajan has done her
            post graduation in Physics and is a retired teacher of Stella Maris High School,
            Vyalikaval, Bangalore. She represents a rare combination of knowledge of Sanskrit
            language, Shastras, Carnatic music, physics, mathematics, literature, and most
            importantly – life skills.
          </p>

          {/* Inline image 1 */}
          <div className="maata-inline-image">
            <img src={Inline1} alt="Maatha teaching" />
          </div>

           <p>
            She hails from a very cultured and intellectual family. Born in the year 1943 to
            a father who was an astute mathematician and a mother who was a great Sanskrit
            Vidushi, she was blessed with a strong foundation that shaped her life. She learnt
            Carnatic music from Sri Balaganesha Iyer for 15 years from the age of seven.
          </p>


         <p>
            Her mother’s teacher, Sri Vaidyanatha Sastrigal, was later the teacher of
            Sringeri Acharya Srimad Abhinava Vidyatheertha Mahaswamigal in his poorvashrama.
            Guided by Sri Sri Sri Chandrashekara Bharathi Swamigal, this teacher took
            sanyasa and became Sri Bhashya Swamigal. Being an ardent devotee of the Sringeri
            Acharyas and encouraged by revered teachers, Maataa began giving Upanyasams
            from the tender age of ten. She has delivered religious discourses, composed and
            directed Sanskrit, Kannada, and Tamil dramas, and directed classical Bharatanatyam
            dance recitals. All these activities were aimed at spreading the messages of
            the Bhagavad Gita, educating people on the values and purpose of life, and
            creating awareness about the richness of Sanskrit and Indian culture.
          </p>
          {/* Inline image 2 */}
          <div className="maata-inline-image">
            <img src={Inline2} alt="Maatha with students" />
          </div>

           <p>
            Till date, more than 300 dance dramas and 150 Sanskrit dance dramas have been
            conducted under her direction. She has given Upanyasams across the country and
            abroad – including Singapore, Bahrain, Dubai, and the USA. Her discourses on all
            the ‘pashurams’ of Tiruppavai were telecast by TTD–SVBC2 Kannada channel in 2017.
          </p>

          <p>
            Maataa was always eager to teach children wherever she went. In most places
            where she delivered Upanyasams, she trained local children and made them perform
            Sanskrit dramas and dance dramas. Her nrityaroopakas based on Geethagovindam
            have been widely appreciated. She also composed and presented short educative
            Sanskrit dramas on Ramayana, Bhagavatam, Shankara Digvijaya, and many aspects
            of Sanatana Dharma.
          </p>

          
          <p>The main themes for her discourses (Upanyasams) include:</p>
          <ul>
            <li>Geetha–Govindam (Sri Jayadeva Mahakavi)</li>
            <li>Krishna–Leela–Tarangini (Sri Narayana Teertha)</li>
            <li>The Bhagavad Gita</li>
            <li>Tiruppavai</li>
            <li>Srimad Valmiki Ramayanam</li>
            <li>Srimad Bhagavatam</li>
            <li>Sri Naarayaneeyam</li>
            <li>Srivaishnava and Nayanmar Saints</li>
            <li>Mukunda Maala</li>
            <li>Bhaktavijaya</li>
            <li>Vivekachoodamani</li>
            <li>Stotras and Works of Sri Adi Shankaracharya</li>
          </ul>

         <p>
            She was the secretary of Hindu Samaya Maadar Manram, a satsang for ladies,
            which spreads the message of bhakti through group prayers, service activities,
            Geetha-jnaana-yagna, Rukmini Kalyanam, Radha Kalyanam, and many other dharmic
            activities.
          </p>

          <p>
            An ardent devotee of Sri Jagannatha of Puri, she organized and conducted
            Rathayatra of Lord Jagannatha in Vyalikaval every year, coinciding with the
            Puri Rathayatra. A voracious reader, she wrote regularly for publications such
            as Sudharma (Sanskrit daily) and Shankara Krupa (Kannada monthly). She authored
            several books including *Geetha–Amrutha–Mahima*, *Nayanmar Saints*,
            *Pavanapurapathi Mahimaa*, and *Shivaleelarnava*. Her Kannada commentary on
            Lalitasahasranamam was blessed by the Jagadguru of Sringeri. She also compiled
            the prayer book *Stutikusumanjali*.
          </p>

            <p>
            She was a dedicated teacher who lived by the principle “practice before you preach.”
            Her impeccable character, strict adherence to Sanatana Dharma, and unshakeable
            devotion to her Gurus inspired generations of students. She had the same patience
            and enthusiasm to teach the Sanskrit varnamala to a young beginner as she had while
            explaining the profound philosophy of Vivekachoodamani.
          </p>

          <p>
            On November 2nd, 2023 – Maatha attained the lotus feet of Bhagavan Jagannatha.
          </p>


        </div>

        <h3 className='mantra sanskrit'>सद्गुरो पाहि परमदयालो पाहि</h3>
      </section>

      {/* Image Gallery */}
      <section className="maata-gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery-grid">
          <img src={G1} alt="" />
          <img src={G2} alt="" />
          <img src={G3} alt="" />
          <img src={G4} alt="" />
          <img src={G5} alt="" />
          <img src={G6} alt="" />
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
