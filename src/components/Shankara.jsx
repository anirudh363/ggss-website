import React from 'react';
import ShkImg from '../assets/shnkr.png';
import { Link } from 'react-router-dom';

export default function Shankara() {
  return (
    <div className='guru component'>
        <div className="guru__text">
            <h2 className='subheading'>Shankara Jayanti</h2>
            <p>On the auspicious occasion of Shankara Jayanti, GGSS organizes a special Rathotsava in honour of Jagadguru Adi Shankaracharya. Students come together to chant stotras composed by the Acharya, recite shlokas, and sing devotional bhajans that celebrate his profound contributions to Sanātana Dharma. The procession, marked by discipline, devotion, and joyous participation, serves as a heartfelt tribute to the Acharya’s life and teachings. This annual event not only instills spiritual values in the students but also deepens their understanding of Advaita philosophy and the timeless wisdom gifted to us by Adi Shankaracharya.</p>
            {/* <div className="know_more">
            <Link to="guruvandanam">Know More</Link>
            </div> */}
        </div>
        <div className="guru__image">
            <img src={ShkImg} alt="Shankara Image" />
        </div>
    </div>
  )
}
