import React from 'react';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';
import Maatha from "../components/Maatha.jsx";
import About from '../components/About.jsx';

import Guru from '../assets/abh.jpeg'


export default function AboutUsPage() {
  return (
    <div className='aboutus-page page'>
    <HeroWithoutStrip page={{title: "About GGSS"}} />
      {/* <p>Page under development...राम राम राम</p> */}
      <section className="about component">
      {/* <div className="about__image">
        <img src={MaataImg} alt="Smt. Ananthalakshmi Natarajan" />
      </div> */}
      <div className="about__text">
        <span className="subheading">GGSS - Inception and Growth</span>
        <p>
          Geetha Govinda Samskrita Sangha was founded in 1976 by Smt. Ananthalakshmi Natarajan. The idea of an organisation targetted at children was conceived by her as she was involved in various satsang activities and found that there were no organised facilities available for children to learn Sanskrit or shlokas. She therefore obtained the blessings of his holiness Shri Shri Shri Abhinava Vidyateertha Mahaswamigal, the then pontiff of the Sringeri Mahasamsthanam, and started the Geetha Govinda Samskrita Sangha, gathering a few children of the neighbourhood. GGSS thus began in the premises of her home in Vyalikaval, Bangalore. She started teaching them simple shlokas composed by Shri Shankaracharya and others. She also taught them basic Sanskrit, starting from the script and simple words.
        </p>
        
      </div>
      
      
    </section>
    
     <section className="about component"><div className="about__text">
        <span className="subheading">Inspiration</span>

       <div className="about__image abh">
        <img src={Guru} alt="Shri Shri Abhinava Vidya Theertha Mahaswami" />
      </div>

        <p>
          The haloed guru-parampara of the Sringeri Sharada Matham, one of the chaturamnaya peethas established by Adi Shankaracharya, is known for it's affection and kindness towards students of Sanskrit and the shastras. The gurus of Sringeri have been the guiding force of all activities of the Geetha Govinda Samskrita Sangha since it's inception. Our sangha was established with the express benediction of His Holiness Shri Shri Shri Abhinava Vidyateertha Mahaswamigal, the 35th pontiff of the Sringeri matham. The present peethadhipati of the matham, Shri Shri Shri Bharathithirtha Mahaswamiji and Shri Shri Shri Vidushekharabharati Mahaswamiji, are continuing to patronise us with his divine blessings. All endeavours of the sangha are initiated after seeking their anugraha. Like a father delighting in the babble of his child, the Jagadgurus continue to delight in our dabblings with the divine language, patiently tolerating our mistakes, despite themselves being scholars par excellence. We prostrate at their feet and seek their continued blessings in all our efforts. With their grace, we hope to improve constantly and dedicate ourselves to the service of geervanabharati and bharatamata.
        </p>

         
       
      </div>
      </section>

      <Maatha />
      

      <section className="about component"><div className="about__text">
        <span className="subheading">Our learning model</span>
         
         <p>
          The Sura-Saraswathi-Sabha, established by H.H Shri Shri Shri Abhinava Vidyateertha Swamiji, conducts basic Sanskrit exams at five levels, which prepares students to enter into a serious study of Sanskrit kavyas and shastras. Smt Ananthalakshmi Natarajan uses these texts as the guideline and prepares students to take up these exams. She also trains them for taking up the Saral Sanskrit series of exams conducted by Bharatiya Vidya Bhavan.
        </p>
        <p>
          Through the years, she has taught hundreds of students, many of whom, in turn, became teachers and are teaching junior students of the sangha. As the number of students increased, the venue was shifted from her home to TTD, where classes were held for several years, after which the venue was shifted to larger premises of Vyalikaval Education Society, located in the same neighbourhood. The first branch of GGSS was started in 1996 in Vijayanagar, by Shri T R Panchukrishnan, under her guidance. Later, as students who learnt from her moved to various parts of Bangalore, further branches were set up in Chickpet, Vidyaranyapura, Dollars Colony, Wilson Garden, Malleshwaram, Thindlu, Mathikere, Prashantnagar and Soundaryanagar layouts in Bangalore. The first branch outside Bangalore was established by Shri.Hariharan in Chennai (Nanganallur) in 2003. A second branch in Chennai has been running for the past year, set up by one of his students. There is also a branch which was set up in Satyamangalam in Salem, earlier this year. Branches have also come up in Hyderabad and Mumbai, the two other major metropolitan cities of South India.
        </p>
        <br />
        <p>
          All branches of GGSS are being maintained under the guidelines established by Smt. Ananthalakshmi Natarajan. Stutikusumanjali, Bhagavadgita and texts of SSS are the standard portions taught. It is ensured that a basic minimum standard is established and followed everywhere in teaching.
        </p>
        <br />
        <p>
          The students of GGSS have been participating in various competitions conducted by organisations such as the Chitrapore Math, many schools and colleges in Bangalore, and have always bagged prizes. They have been commended for their clarity of pronounciation, dedication and devotion. Recitation of shlokas, Antyakshari, Mythological Dumb Charades, etc are some of the events at which our students excel. They also secure excellent marks in the examinations which we coach for. GGSS has recorded 100% results regularly. But more important than any of these, our students are appreciated because they have imbibed the humility and equanimity that our mother teaches - 'sukha-dukhe same krtvaa' - is what she tries to instill in every student who enters GGSS. It is not just Sanskrit or the shlokas, but an attitude to be imbibed for greater quality of life, that our sangha strives to drive in.
        </p>
        </div>
      </section>
    
      

      
      <BackToTop />
    </div>
  )
}
