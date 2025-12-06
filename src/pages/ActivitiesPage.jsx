import React from 'react';
import { Link } from 'react-router-dom';
import ActivitiesImg from '../assets/activities.png'; 
import BackToTop from '../components/BackToTop.jsx';
import HeroWithoutStrip from '../components/HeroWithoutStrip.jsx';
import Activities from "../components/Activities.jsx"
import ActivitiesTabs from '../components/ActivitiesTabs.jsx';
import Divider from '../components/Divider.jsx';
import Pratibha from '../components/Pratibha.jsx';
import Camp from '../components/Camp.jsx';
import Annual from '../components/Annual.jsx';
import Guru from '../components/Guru.jsx';

export default function ActivitiesPage() {
  return (
    <div className='activities-page page'>
      <HeroWithoutStrip page={{title: "Activities"}} />
      {/* <p>Page under development...राम राम राम</p> */}
      {/* <div className="activities__image">
              <img src={ActivitiesImg} alt="Spiritual Activities" />
            </div> */}

            <ActivitiesTabs 
        literaryComponents={[Pratibha, Camp, Annual]}
        culturalComponents={[Guru]} 
      />
      
      <section className="about component">
        
        <div className="about__text"> 
          <p>Along with the curricular activities, GGSS also conducts many spiritual activities
aimed at exposing the children to the rich spiritual heritage of our country. Efforts
are made to educate the children about the plethora of Indian festivals, and the
mythology associated with each of them.</p>
<p>
  On two occasions, poojas are celebrated in class wherein the children get to know the
standard rituals to be performed on such occasions. One of these is the Shankara
jayanthi, which falls on Vaishakha shuddha panchami of every year (April/May). This
happens to be the birth-tithi of Adi Shankaracharya. The birthday of Sri
Ramanujacharya also falls in the same month. Combining both these, on the Sunday
closest to these days, the festival is celebrated during class-hours. Respects are paid
to the gurus and prasadam is distributed.
</p>
<p>
  This year, Shankara Jayanthi falls on 8th May 2011. In connection to this,
celebrations would be held by Sri P.N.Ramachandra Iyer Trust from 4th May to 8th
May 2011. Celebrations include Chaturveda parayanam, Geetha bhaashya and
Upanishadbhashya parayanam, Samoohika upanayanam, Rudraikadashini and Shobha
Yatra. (Click here for details). Shankara Jayanthi pooja would also be held on 8th
May, in Vyalikaval and Vijayanagar branches.
</p>
<p>
  Similarly, Ganesha Chaturthi celebrated on Bhadrapada shukla chaturthi and
Krishnashtami celebrated on Shravana krishna ashtami are important festivals for
Hindus. On a Sunday soon after these festivals (Aug/Sep), a combined poojaa for the
deities Gowri, Ganesha and Krishna is offered at class. This year, pooja would be
organised in Vyalikaval class on 25th September, and in Vijayanagar branch on 4th
September.
</p>
<p>
  In association with Sri P.N. Ramachandra Iyer trust, GGSS organises two
rathotsavams at Vyalikaval every year. First of these is the Jagannatha rathotsavam,
which is held on the same day that the rathyatra takes place in Jagannatha temple at
Puri. The second is the Sharadamba rathotsavam, which coincides with the
rathotsavam held at Sringeri after Navaratri celebrations. On both these occasions,
the deity is taken in a decorated chariot around the streets of Vyalikaval, with the
devotees singing shlokas and bhajans. The deity is worshipped by people near their
houses, and is brought back. The rathotsavam commences and ends at the Srirama
temple in Vyalikaval. In 2011, Jagannatha Rathayatra would be held on 3rd July,
while Sharadamba Rathotsavam would be organised on 7th October.

Along with these, the students are encouraged to take part in various other activities
organised by associated organisations such as P.N.Ramachandra Iyer trust and
Sanatana Dharma Samrakshana Parishad.
</p>
        </div>
        </section>

       
      <BackToTop />
    </div>
  )
}
