import React from 'react';

function Hours() {
  return (
    <div>
      <style jsx>{`
        ul {
          list-style: none;
        }
      `}</style>
      <div className="hours">
        <h2>Business Hours</h2>
        <ul>
          <li>Monday – Thursday, 11 a.m. until 12 midnight</li>
          <li>Friday & Saturday, 11 a.m. until 1 a.m.</li>
          <li>Sunday, 11 a.m. until 11 p.m.</li>
          <li>Minors allowed all days until 9 a.m.</li>
        </ul>
      </div>
    </div>
  );
}
export default Hours;
