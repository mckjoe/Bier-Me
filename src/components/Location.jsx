import React from 'react';

function Location() {
  return (
    <div>
      <style jsx>{`
        ul {
          list-style: none;
          padding-left: 0;
        }
        h2 {
          text-align: center;
        }
      `}</style>
      <div className="location">
        <h2>Find Us</h2>
        <ul>
          <li>400 SW 6th Ave.</li>
          <li>Downtown Portland</li>
          <li>Oregon, 97202</li>
          <li>Drink with us</li>
        </ul>
      </div>
    </div>
  );
}
export default Location;
