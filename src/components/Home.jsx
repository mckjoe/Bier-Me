import React from 'react';
import masthead from '../assets/images/home-page-banner.jpg';
import AboutUs from './AboutUs';

function Home() {
  return (
    <div>
      <style jsx>{`
        .home-banner {
          width: 100%;
          min-width: 300px;
          margin-top: 25px;
        }
      `}</style>
      <div>
        <img className="home-banner" src={masthead}/>
      </div>
      <AboutUs />
    </div>

  );
}
export default Home;
