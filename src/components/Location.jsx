import React from 'react';

function Location() {
  return (
    <div>
      <style jsx>{`
        ul {
          list-style: none;
        }
      `}</style>
    <div className="location">
        <h2>Find Us</h2>
        <ul>
          <li>400 SW 6th Ave.</li>
          <li>Downtown Portland</li>
          <li>Oregon, 97202</li>
        </ul>
      </div>
    </div>
  );
}
export default Location;
