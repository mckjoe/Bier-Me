import React from 'react';
import Beer from './Beer.jsx';
import taps from '../assets/images/taps.jpg';
import rubyzozzle from '../assets/images/ruby-zozzle.jpg';
import tartjuicy from '../assets/images/tart-juicy.jpg';
import hamms from '../assets/images/hamms.jpg';
import ninkasi from '../assets/images/ninkasi.png';
import belgium from '../assets/images/new-belgium.jpeg';
import belgium2 from '../assets/images/new-belgium2.jpeg';

const KEG_LIST = [
  {
    image: rubyzozzle,
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    image: tartjuicy,
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: '60'
  },
  {
    image: hamms,
    name: 'Hamm\'s',
    brewer: 'Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: '65'
  },
  {
    image: ninkasi,
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    remaining: '75'
  },
  {
    image: belgium,
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'IPA',
    abv:  '7.5%',
    price: '6',
    remaining: '18'
  },
  {
    image: belgium2,
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    remaining: '58'
  },
  {
    image: rubyzozzle,
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    image: tartjuicy,
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: '60'
  },
  {
    image: hamms,
    name: 'Hamm\'s',
    brewer: 'Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: '65'
  },
  {
    image: ninkasi,
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    remaining: '75'
  },
  {
    image: belgium,
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'IPA',
    abv:  '7.5%',
    price: '6',
    remaining: '18'
  },
  {
    image: belgium2,
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    remaining: '58'
  }
];

function OnTap() {
  return (

    <div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 10px;
          margin: 0 auto;
          width: 90%;
        }
        .banner {
          width: 100%;
          display: block;
          margin: 25px auto 0;
        }
        .text-box {
          text-align: center;
          margin: 25px auto 25px auto;
          background-color: white;
          width: 30%;
          padding: 25px 50px;
          opacity: .8;
        }
        @media (max-width: 650px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 454px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <img className="banner" src={taps}/>
      <h3 className="text-box">What's On Tap?</h3>

      <div className="grid">
        {KEG_LIST.map((keg, index) =>
          <Beer image={keg.image}
            name={keg.name}
            brewer={keg.brewer}
            description={keg.description}
            abv={keg.abv}
            price={keg.price}
            remaining={keg.remaining}
            key={index}/>
        )}
      </div>
    </div>
  );
}
export default OnTap;
