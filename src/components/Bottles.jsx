import React from 'react';
import Beer from './Beer';
import bottles from '../assets/images/bottles.jpeg';
import hop from '../assets/images/8hop.jpeg';
import zozzle from '../assets/images/zozzle.jpeg';
import epic from '../assets/images/epic.jpeg';
import hammys from '../assets/images/hammys.jpeg';
import nin from '../assets/images/nin.jpeg';
import juicy from '../assets/images/juicy.jpg';

const KEG_LIST = [
  {
    image: zozzle,
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    image: epic,
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: '60'
  },
  {
    image: hammys,
    name: 'Hamm\'s',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: '65'
  },
  {
    image: nin,
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    remaining: '75'
  },
  {
    image: juicy,
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    remaining: '18'
  },
  {
    image: hop,
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    remaining: '58'
  },
  {
    image: zozzle,
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    image: epic,
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: '60'
  },
  {
    image: hammys,
    name: 'Hamm\'s',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: '65'
  },
  {
    image: nin,
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    remaining: '75'
  },
  {
    image: juicy,
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    remaining: '18'
  },
  {
    image: hop,
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    remaining: '58'
  }
];

function Bottles() {
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
          margin: 25px auto 0 auto;
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

    <img className="banner" src={bottles}/>
      <h3 className="text-box">What's in the bottle?</h3>

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
export default Bottles;
