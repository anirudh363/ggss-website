import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';
import BranchCard from '../components/BranchCard.jsx';
import branches from '../assets/branchData.json'

export default function ClassesPage() {
  return (
    <div className='classes-page page'>
      <HeroWithoutStrip page={{title: "Sanskrit Classes and More"}}/>
      {/* <p>Page under development...राम राम राम</p> */}
      <section className="about component">
        <div className="about__text">
          <p>Classes are conducted at GGSS to teach shlokas and sanskrit.</p>
      <p>Shloka class - Simple shlokas in sanskrit are taught from a book of shlokas compiledby our mother. This book is titled 'Stuthikusumaanjali' , and contains many stotrason various deities composed by Adi Shankaracharya, various sages, gurus of theSringeri peetham, and many others. Along with this, the Bhagavadgita is alsoregularly taught. Many other stotras such as Soundaryalahari, VenkateshaSuprabhatam, Mukundamaala, Sankshepa-Ramayanam, etc are also taught tostudents of higher classes. Namasankeertanams and ashtapadis, as per praacheenabhajana sampradaya, are being taught in some branches, based on availability oftime.</p>
      <p>Sanskrit Class - Children are taught to read and write the Devanagari script initially.After that, graded lessons are employed to teach simple words, compound letters, anddifficult words. Many other books like the Chitrapadakosha (Pictorial Dictionary) arealso used to make the lessons more interesting, and to build the vocabulary ofchildren.</p>
      <p>Once the children have picked up the required reading and writing skills, they aretrained to face exams. There are two main series of Basic Sanskrit exams that wecoach for - One is the series conducted by Surasaraswathi Sabha (extablished by theJagadguru of Sringeri) and the other is the Bharatiya Vidya Bhavan Series. Somebranches also coach for advanced exams such as the Chittoor board exams,and examsconducted by the government of Karnataka.</p>
      <div className="know_more">
        <Link to="/">Click here for details of all the exams for which we train students</Link>
      </div>
      <p>The timings of the classes vary among the branches. Please visit our branches pagefor details of individual branches.</p>
      <p>Tests and exams are conducted regularly to evaluate the progress of students, and todetermine the areas which require more attention. Every year, the students are alsotaken for a one-day excursion called 'devalayadarshanam'. The place of visit will beone or more temples in and around Bangalore, and the children will learn about thehistory of the temple and the sthala-mahimaa. Spoken Sanskrit is also taught insome of the branches.</p>

        </div>
      </section>

      
      <BackToTop />
    </div>
  )
}
