import React from 'react';
import Snack from './Snack';
import snacks from '../assets/images/snacks.jpg';
import sliders from '../assets/images/sliders.jpg';
import food from '../assets/images/food.jpg';
import frenchtoast from '../assets/images/french-toast.jpg';
import nachos from '../assets/images/nachos.jpg';
import taco from '../assets/images/taco.jpg';
import vegan from '../assets/images/vegan.jpeg';

const SNACK_LIST = [
  {
    image: sliders,
    snack: 'Sliders',
    cost: '7.00',
  },
  {
    image: frenchtoast,
    snack: 'French Toast',
    cost: '7.00',
  },
  {
    image: nachos,
    snack: 'nachos',
    cost: '7.00',
  },
  {
    image: taco,
    snack: 'taco',
    cost: '7.00',
  },
  {
    image: vegan,
    snack: 'vegan',
    cost: '7.00',
  },
  {
    image: food,
    snack: 'burger',
    cost: '7.00',
  },
  {
    image: sliders,
    snack: 'Sliders',
    cost: '7.00',
  },
  {
    image: frenchtoast,
    snack: 'French Toast',
    cost: '7.00',
  },
  {
    image: nachos,
    snack: 'nachos',
    cost: '7.00',
  },
  {
    image: taco,
    snack: 'taco',
    cost: '7.00',
  },
  {
    image: vegan,
    snack: 'vegan',
    cost: '7.00',
  },
  {
    image: food,
    snack: 'burger',
    cost: '7.00',
  }
];
function Snacks() {
  return (
    <div>
      <style jsx>{`
          .snacks {
            width: 100%;
            display: block;
            margin: 25px auto 0;
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 10px;
            margin: 0 auto;
            width: 90%;
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

      <img className="snacks" src={snacks} />
      <div className="grid">
        {SNACK_LIST.map((snack, index) =>
          <Snack image={snack.image}
            snack={snack.snack}
            cost={snack.cost}
            key={index}/>
        )}
      </div>
    </div>
  );
}
export default Snacks;
