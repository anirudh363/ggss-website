import React from 'react';
import Shloka1Img from '../assets/gita.png';
import Shloka2Img from '../assets/stutikusumanjali.png';
import Shloka3Img from '../assets/jayadeva.png';

const shlokas = [
  {
    image: Shloka1Img,
    title: "गीता सुगीता कर्तव्या",
    text: 
      "अशोच्यानन्व शोचस्त्वं प्रज्ञावादांश्च भाषसे ।\n" +
      "गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥ २.११",
    meaning: "The wise do not grieve for the living or the dead.",
  },
  {
    image: Shloka2Img,
    title: "दैनन्दिन स्तुतिकुसुमाञ्जलिः",
    text: 
      "गुरुरेव गतिः गुरुमेव भजे गुरुणैव सहास्मि नमो गुरवे ।\n" +
      "नगुरोः परमं शिशुरस्मि गुरोः मतिरस्ति गुरौ मम पाहि गुरो ॥",
    meaning: "Guru is everything; I worship only the Guru. I am but a child of the Guru—protect me, O Guru!",
  },
  {
    image: Shloka3Img,
    title: "नित्यं श्री जयदेवसरस्वती",
    text: 
      "मेघैर्मेदुरमम्बरं वनभुवः श्यामास्तमालद्रुमैः\n" +
      "नक्तं भीरुरयं त्वमेव तदिमं राधे गृहं प्रापय ।\n" +
      "इत्थं नन्दनिदेशितश्चलितयोः प्रत्यध्वकुञ्जद्रुमं\n" +
      "राधामाधवयोर्जयन्ति यमुनाकूले रहःकेलयः ॥ १ ॥",
    meaning: "Glory to the secret divine sports of Radha and Madhava near the Yamuna, as guided by Nanda.",
  },
];

export default function ShlokaCards() {
  return (
    <section className="shloka-cards__wrapper">
  <div className="shloka-cards">
    <h2 className="subheading" style={{ textAlign: 'center' }}>Selected Shlokas</h2>
    <div className="shloka-cards__container">
      {shlokas.map((shloka, index) => (
        <div className="shloka-card" key={index}>
          <img src={shloka.image} alt={`Shloka ${index + 1}`} />
          <h3>{shloka.title}</h3>
          <p className="shloka-text" style={{ whiteSpace: 'pre-line' }}>{shloka.text}</p>
          <p className="shloka-meaning">{shloka.meaning}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
