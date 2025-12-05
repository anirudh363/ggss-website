import React from 'react';
import AnnualImg from '../assets/annual.png'; 
import { Link } from 'react-router-dom';

export default function Annual() {
  return (
   <div className='annual component'>
           <div className="annual__image">
           <img src={AnnualImg} alt="Annual Day Image" />
         </div>
         <div className="annual__text">
         <span className='subheading'>Annual Day</span>
           <ul>
               <li>GGSS Annual Day is held every Jan–Feb across all branches.</li>
               <li>Presided over by Smt. Ananthalakshmi Natarajan, with eminent Sanskrit scholars as chief guests.</li>
               <li>Notable dignitaries include Sri Chamu Krishna Shastri, Sri Shatavadhani R. Ganesh, Vid. Mahabaleshwar Bhat, and many others.</li>
               <li>Students perform songs, dances, dramas, and speeches — all in Sanskrit.</li>
               <li>They also host the event and interact with guests in Sanskrit, boosting their confidence.</li>
               <li>Winners from Aamodaa competitions are felicitated with valuable Sanskrit books to encourage further learning.</li>
           </ul>
           {/* <div className="know_more">
           <Link to="/annualday">Know More</Link>
         </div> */}
         </div>
       </div>
  )
}











