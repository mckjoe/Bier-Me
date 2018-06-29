import React from 'react';
import employees from '../assets/images/employees.jpg';

function AboutUs() {
  return (
    <div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          margin-top: 15px;
        }
        .about-us {
          width: 80%;
          border: 1px solid black;
          padding: 15px 25px;
          margin: 0 auto;
          margin-bottom: 10px;
        }
        .employees {
          width: 96%;
          margin: 0 2%;
          transform: translateY(-5px);
        }
        @media (max-width: 758px) {
          .grid {
            grid-template-columns: 1fr
          }
        }
      `}</style>
    <div className="grid">
        <div className="about-us">
          <h2>Who are we?</h2>
          <p>At the Bier Haus - you have the opportunity to drink the best of the best beers and celebrate the amazing craft beer tradition that is the envy of the World. To top it all off we have partnered with the greatest sausage maker in America, Portland’s own Olympia Provisions, to offer the best one two beer sausage combo you could ever imagine. Add a freshly baked pretzel with cheese dipping sauce to the mix and boom goes the dynamite.</p>
        </div>
        <img className="employees" src={employees}/>
      </div>
    </div>
  );
}
export default AboutUs;
