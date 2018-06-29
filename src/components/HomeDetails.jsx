import React from 'react';
import Hours from './Hours';
import Location from './Location';

function HomeDetails() {
  return (
    <div>
      <style jsx>{`
        .flex {
          display: flex;
          justify-content: space-evenly;
        }
      `}</style>
      <div className="flex">
        <Hours />
        <Location />
      </div>
    </div>
  )
}
export default HomeDetails;
