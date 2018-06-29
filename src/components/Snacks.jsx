import React from 'react';
import snacks from '../assets/images/snacks.jpg';
function Snacks() {
  return (
    <div>
      <style jsx>{`
          .snacks {
            width: 100%;
            display: block;
            margin: 25px auto 0;
          }
      `}</style>

    <img className="snacks" src={snacks} />
    </div>
  );
}
export default Snacks;
