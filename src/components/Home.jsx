import React from 'react';
import masthead from '../assets/images/home-page-banner.jpg';
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
    </div>

  );
}
export default Home;
